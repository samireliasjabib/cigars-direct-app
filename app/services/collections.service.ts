import {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {COLLECTION_HERO_QUERY} from '~/data/collections';

export const fetchCollectionData = async ({context}: LoaderFunctionArgs) => {
  return context.storefront.query(COLLECTION_HERO_QUERY, {
    variables: {
      handle: 'cigars-of-the-year',
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
};
