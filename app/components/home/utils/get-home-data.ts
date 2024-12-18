import {seoPayload} from '~/lib/seo.server';
import {fetchCollectionData} from '~/services/collections.service';

import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';

async function loadCriticalData(args: LoaderFunctionArgs) {
  const {request} = args;
  try {
    const [collectionData] = await Promise.all([
      fetchCollectionData(args),
      // PUT OTHER CRITICAL QUERIES HERE (example of parallel request)
    ]);
    return {
      collectionData,
      seo: seoPayload.home({url: request.url}),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

function loadDeferredData({context}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;

  return {};
}

function getHomeData(args: LoaderFunctionArgs) {
  const {params, context} = args;
  const {language, country} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    throw new Response(null, {status: 404});
  }

  try {
    const deferredData = loadDeferredData(args);
    const criticalData = loadCriticalData(args);

    return {...deferredData, ...criticalData};
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default getHomeData;
