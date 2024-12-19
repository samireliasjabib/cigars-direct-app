import {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {COLLECTION_BY_HANDLE_QUERY} from '~/data/collections';

export const fetchCollectionData = async ({
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
