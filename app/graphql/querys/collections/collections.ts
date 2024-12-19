import {
  COLLECTION_CONTENT_FRAGMENT,
  COLLECTION_METAFIELDS_FRAGMENT,
} from './fragments';

const HOMEPAGE_SEO_QUERY = `#graphql
  query seoCollectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
  ${COLLECTION_CONTENT_FRAGMENT}
` as const;

const GET_COLLECTION_TOP_BOUTIQUE_QUERY = `#graphql
  query getCollectionTopBoutiqueBrands($handle: String, $country: CountryCode, $language: LanguageCode)
@inContext(country: $country, language: $language) {
  collection: collection(handle: $handle) {
    handle
    title
    metafields(identifiers: {namespace: "custom", key: "collection_group_top_boutique_cigars_brands"}) {
      id
      description
      namespace
      key
      references(first: 10) {
        edges {
          __typename
          node {
            __typename
            ... on Collection {
              handle
              image {
                url
                altText
              }
              title
            }
          }
        }
      }
    }
  }
}
` as const;

const COLLECTION_BY_HANDLE_QUERY = `#graphql
  query collectionByHandle($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collection: collection(handle: $handle) {
      ...CollectionContent
    }
  }
  ${COLLECTION_CONTENT_FRAGMENT}
` as const;

export {
  COLLECTION_BY_HANDLE_QUERY,
  GET_COLLECTION_TOP_BOUTIQUE_QUERY,
  HOMEPAGE_SEO_QUERY,
};
