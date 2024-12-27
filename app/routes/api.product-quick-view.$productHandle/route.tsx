import {getSelectedProductOptions} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {productHandle} = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const selectedOptions = getSelectedProductOptions(request);

  try {
    const {product} = await context.storefront.query(
      `#graphql
        query ProductQuickView(
          $handle: String!
          $selectedOptions: [SelectedOptionInput!]!
        ) {
          product(handle: $handle) {
            id
            title
            handle
            options {
                name
                optionValues {
                    name
                }
            }
            variants(first: 10) {
              nodes {
                id
                title
                availableForSale
                selectedOptions {
                  name
                  value
                }
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
              }
            }
            selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
              id
              title
              price {
                amount
              }
              compareAtPrice {
                amount
              }
              image{
                url
                altText
                id
                width
                height
              }
            }
          }
        }`,
      {
        variables: {
          handle: productHandle,
          selectedOptions,
        },
      },
    );

    if (!product) {
      throw new Response('Product not found', {status: 404});
    }

    // Default to the first variant if no variant is selected
    const firstVariant = product.variants.nodes[0];
    if (!product.selectedVariant && firstVariant) {
      product.selectedVariant = firstVariant;
    }

    return json({product});
  } catch (error) {
    console.error('Error loading product:', error);
    return json({error: 'Error loading product', status: 500}, {status: 500});
  }
}
