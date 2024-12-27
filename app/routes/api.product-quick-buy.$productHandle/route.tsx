import {
  defer,
  type MetaArgs,
  type LoaderFunctionArgs,
  json,
} from '@shopify/remix-oxygen';
import {PRODUCT_QUICK_BUY_FRAGMENT} from '~/graphql/querys/products/fragments';

export async function loader(args: LoaderFunctionArgs) {
  const {params, context} = args;
  const {productHandle} = params;
  const {storefront} = context;

  if (!productHandle) {
    throw new Error('Missing product handle');
  }

  try {
    const data = await storefront.query(
      `#graphql
        query ProductQuickBuy($handle: String!) {
          product(handle: $handle) {
            ...ProductQuickBuy
          }
        }
        ${PRODUCT_QUICK_BUY_FRAGMENT}
      `,
      {
        variables: {
          handle: productHandle,
        },
        cache: {
          maxAge: 60, // Cache in Oxygen for 60 seconds
          staleWhileRevalidate: 60,
        },
      },
    );

    if (!data.product) {
      throw new Response('Product not found', {status: 404});
    }

    return json(
      {product: data.product},
      {
        headers: {
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
          Vary: 'Accept, Accept-Encoding',
          ETag: `"${productHandle}"`,
        },
      },
    );
  } catch (error) {
    console.error(error);
    return json({error: 'Error loading product'}, {status: 500});
  }
}
