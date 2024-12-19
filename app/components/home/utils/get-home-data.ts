import {seoPayload} from '~/lib/seo.server';

import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {
  getCollectionByHandle,
  getTopBoutiqueCigarsBrand,
} from '~/services/collections.service';

export async function loadCriticalData(args: LoaderFunctionArgs) {
  const {request} = args;
  try {
    const [cigarsOfTheYear] = await Promise.all([
      getCollectionByHandle({
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

export function loadDeferredData(args: LoaderFunctionArgs) {
  const topBoutiqueCigarsBrands = getTopBoutiqueCigarsBrand({
    args,
    handle: 'top-boutique-cigar-brands',
  });

  return {
    topBoutiqueCigarsBrands,
  };
}
