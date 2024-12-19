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
  loadCriticalData,
  loadDeferredData,
} from '~/components/home/utils/get-home-data';
import TopCigarsBrands from '~/components/home/top-cigars-brands/TopCigarsBrands';
import HomeBanner from '~/components/home/home-banner/HomeBanner';
import CigarsOfTheYear from '~/components/home/cigars-of-the-year/CigarsOfTheYear';
import TopBoutiqueCigarBrands from '~/components/home/top-boutique-cigar-brands/TopBoutiqueCigarBrands';
import AboutUs from '~/components/home/about-us/About-us';
import {
  CollectionByHandleQuery,
  GetCollectionTopBoutiqueBrandsQuery,
} from 'storefrontapi.generated';
import {Suspense} from 'react';
import Reviews from '~/components/home/reviews/Reviews';

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
          altText: 'cigars-direct-banner-desktop',
        }}
        mobileImage={{
          url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/banner-mobile.webp?v=1734482417',
          altText: 'cigars-direct-banner-mobile',
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
    </>
  );
}
