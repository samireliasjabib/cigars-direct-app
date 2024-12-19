import {MEDIA_FRAGMENT} from '../media/fragments';

export const COLLECTION_METAFIELDS_FRAGMENT = `#graphql
  fragment CollectionMetafields on Metafield {
    references(first: 10) {
      edges {
        node {
          __typename
          ... on Collection {
            handle
            title
            image {
              url
            }
          }
        }
      }
    }
  }
` as const;

export const COLLECTION_PRODUCT_FRAGMENT = `#graphql
  fragment ProductContent on Product {
    id
    title
    handle
    media(first: 2) {
      nodes {
        ...Media
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 1) {
      edges {
        node {
          id
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            url
            altText
          }
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
` as const;

export const FEATURED_COLLECTION_FRAGMENT = `#graphql
  fragment FeaturedCollectionDetails on Collection {
    id
    title
    handle
    image {
      altText
      width
      height
      url
    }
  }
`;

export const COLLECTION_CONTENT_FRAGMENT = `#graphql
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    products(first: 10) {
      edges {
        node {
          ...ProductContent
        }
      }
    }
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
  ${COLLECTION_PRODUCT_FRAGMENT}
` as const;
