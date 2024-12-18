import {seoPayload} from '~/lib/seo.server';

import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {fetchCollectionData} from '~/services/collections.service';

async function loadCriticalData(args: LoaderFunctionArgs) {
  const {request} = args;
  try {
    const [cigarsOfTheYear] = await Promise.all([
      fetchCollectionData({
        args,
        handle: 'cigars-of-the-year',
      }),
      // PUT OTHER CRITICAL QUERIES HERE (example of parallel request)
    ]);

    return {
      cigarsOfTheYear,
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

async function getHomeData(args: LoaderFunctionArgs) {
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
    const criticalData = await loadCriticalData(args);

    return {...deferredData, ...criticalData};
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export default getHomeData;
