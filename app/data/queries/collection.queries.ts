import {MEDIA_FRAGMENT} from '../fragments';
import {PRODUCT_VARIANT_FRAGMENT} from './products.queries';

const COLLECTION_BASIC_FRAGMENT = `#graphql
  fragment CollectionBasic on Collection {
    id
    handle
    title
    descriptionHtml
  }
` as const;

const COLLECTION_HERO_FRAGMENT = `#graphql
  fragment CollectionHero on Collection {
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
  ${MEDIA_FRAGMENT}
` as const;

const COLLECTION_PRODUCTS_FRAGMENT = `#graphql
  fragment CollectionProducts on Collection {
    products(first: 8) {
      nodes {
        id
        title
        publishedAt
        handle
        variants(first: 1) {
          nodes {
            ...ProductVariant
          }
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

export const COLLECTION_QUERY = `#graphql
  query heroCollectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...CollectionBasic
      ...CollectionHero
      ...CollectionProducts
    }
  }
  ${COLLECTION_BASIC_FRAGMENT}
  ${COLLECTION_HERO_FRAGMENT}
  ${COLLECTION_PRODUCTS_FRAGMENT}
` as const;
