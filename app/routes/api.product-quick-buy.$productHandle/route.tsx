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
      },
    );

    console.log(data.product);

    return new Response(
      JSON.stringify({
        product: data.product,
        status: 200,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}
