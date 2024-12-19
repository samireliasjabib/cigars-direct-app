import {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {
  COLLECTION_BY_HANDLE_QUERY,
  GET_COLLECTION_TOP_BOUTIQUE_QUERY,
} from '~/graphql/querys/collections/collections';

export const getCollectionByHandle = async ({
  args,
  handle,
}: {
  args: LoaderFunctionArgs;
  handle: string;
}) => {
  const {context} = args;
  return context.storefront.query(COLLECTION_BY_HANDLE_QUERY, {
    variables: {
      handle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
};

export const getTopBoutiqueCigarsBrand = async ({
  args,
  handle,
}: {
  args: LoaderFunctionArgs;
  handle: string;
}) => {
  const {context} = args;
  return context.storefront.query(GET_COLLECTION_TOP_BOUTIQUE_QUERY, {
    variables: {
      handle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });
};
