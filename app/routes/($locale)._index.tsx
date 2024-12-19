import {
  defer,
  type MetaArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getSeoMeta} from '@shopify/hydrogen';

// import {getHeroPlaceholder} from '~/lib/placeholders';
import {routeHeaders} from '~/data/cache';
import {seoPayload} from '~/lib/seo.server';

import getHomeData from '~/components/home/utils/get-home-data';
import TopCigarsBrands from '~/components/home/top-cigars-brands/TopCigarsBrands';
import HomeBanner from '~/components/home/home-banner/HomeBanner';
import CigarsOfTheYear from '~/components/home/cigars-of-the-year/CigarsOfTheYear';
import TopBoutiqueCigarBrands from '~/components/home/top-boutique-cigar-brands/TopBoutiqueCigarBrands';
export const headers = routeHeaders;

export async function loader(args: LoaderFunctionArgs) {
  try {
    const data = await getHomeData(args);
    return defer({
      ...data,
      seo: seoPayload.home({url: args.request.url}),
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
  const {cigarsOfTheYear} = useLoaderData<typeof loader>();

  // TODO: skeletons vs placeholders
  // const skeletons = getHeroPlaceholder([{}, {}, {}]);

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
      <TopBoutiqueCigarBrands />
    </>
  );
}
