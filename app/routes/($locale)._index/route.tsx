import {
  defer,
  type MetaArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {Await, useLoaderData} from '@remix-run/react';
import {getSeoMeta, SeoConfig} from '@shopify/hydrogen';

// import {getHeroPlaceholder} from '~/lib/placeholders';
import {routeHeaders} from '~/data/cache';

import {
  CollectionByHandleQuery,
  GetCollectionTopBoutiqueBrandsQuery,
} from 'storefrontapi.generated';
import {Suspense} from 'react';
import HomeBanner from './components/home-banner/HomeBanner';
import TopCigarsBrands from './components/top-cigars-brands/TopCigarsBrands';
import CigarsOfTheYear from './components/cigars-of-the-year/CigarsOfTheYear';
import TopBoutiqueCigarBrands from './components/top-boutique-cigar-brands/TopBoutiqueCigarBrands';
import AboutUs from './components/about-us/About-us';
import Reviews from './components/reviews/Reviews';
import GridBanner from './components/grid-banner/GridBanner';
import NewsCigar from './components/news-cigar/NewsCigar';
import RecentlyViewed from './components/recently-viewed/RecentlyViewed';
import {loadCriticalData, loadDeferredData} from './utils/get-home-data';

export const headers = routeHeaders;

type HomeLoaderData = {
  topBoutiqueCigarsBrands: Promise<{
    topBoutiqueCigarsBrands: GetCollectionTopBoutiqueBrandsQuery;
  }>;
  cigarsOfTheYear: CollectionByHandleQuery;
  seo: SeoConfig;
};

export async function loader(args: LoaderFunctionArgs) {
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

    return defer({
      ...deferredData,
      ...criticalData,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Homepage() {
  const {cigarsOfTheYear, topBoutiqueCigarsBrands} =
    useLoaderData<HomeLoaderData>();

  return (
    <>
      <HomeBanner
        desktopImage={{
          url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/banner-image.webp?v=1734482420',
          altText: 'Promotional banner for desktop users showing latest offers',
        }}
        mobileImage={{
          url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/banner-mobile_c5c916db-e68c-4fbd-bcf3-85c47af15e95.webp?v=1735541112',
          altText: 'Promotional banner for mobile users showing latest offers',
        }}
      />
      <TopCigarsBrands />
      {cigarsOfTheYear ? (
        <CigarsOfTheYear cigarsOfTheYear={cigarsOfTheYear} />
      ) : null}
      {topBoutiqueCigarsBrands ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={topBoutiqueCigarsBrands}>
            {(topBoutiqueCigarsBrands) => (
              <TopBoutiqueCigarBrands
                topBoutiqueCigarsBrands={
                  topBoutiqueCigarsBrands as unknown as GetCollectionTopBoutiqueBrandsQuery
                }
              />
            )}
          </Await>
        </Suspense>
      ) : null}
      <AboutUs />
      <Reviews />
      <GridBanner />
      <NewsCigar />
      <RecentlyViewed cigarsOfTheYear={cigarsOfTheYear} />
    </>
  );
}
