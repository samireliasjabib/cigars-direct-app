import {
  defer,
  type MetaArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getSeoMeta} from '@shopify/hydrogen';

import {getHeroPlaceholder} from '~/lib/placeholders';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';
import TopCigarsBrands from '~/components/home/top-cigars-brands/TopCigarsBrands';
import HomeBanner from '~/components/home/home-banner/HomeBanner';
import CigarsOfTheYear from '~/components/home/cigars-of-the-year/CigarsOfTheYear';
import {
  CollectionHeroFragment,
  CollectionsQuery,
} from 'storefrontapi.generated';
import {COLLECTION_HERO_QUERY} from '~/data/queries/collection.queries';

export const headers = routeHeaders;

export async function loader(args: LoaderFunctionArgs) {
  const {params, context} = args;
  const {language, country} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  try {
    const deferredData = loadDeferredData(args);

    const criticalData = await loadCriticalData(args);

    return defer({...deferredData, ...criticalData});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

async function loadCriticalData({context, request}: LoaderFunctionArgs) {
  try {
    const [collectionData] = await Promise.all([
      // Fetch collection data
      context.storefront.query(COLLECTION_HERO_QUERY, {
        variables: {
          handle: 'cigars-of-the-year',
          country: context.storefront.i18n.country,
          language: context.storefront.i18n.language,
        },
      }),
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

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;

  return {};
}

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Homepage() {
  const {collectionData} = useLoaderData<typeof loader>();

  console.log(collectionData?.collections.nodes[0]);

  // TODO: skeletons vs placeholders
  const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <>
      <HomeBanner
        desktopImage={{
          url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/banner-image.webp?v=1734482420',
          altText: 'cigars-direct-banner-desktop',
        }}
        mobileImage={{
          url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/banner-mobile.webp?v=1734482417',
          altText: 'cigars-direct-banner-mobile',
        }}
      />
      <TopCigarsBrands />
      <CigarsOfTheYear />
    </>
  );
}
