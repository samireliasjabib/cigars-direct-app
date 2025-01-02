import {HomeBannerProps} from './types';

import MobileBanner from './components/MobileBanner';
import DesktopBanner from './components/DesktopBanner';

function HomeBanner({mobileImage, desktopImage}: HomeBannerProps) {
  return (
    <section aria-labelledby="home-banner-title" className="pb-10 md:pb-20">
      <h1 id="home-banner-title" className="sr-only">
        Welcome to Our Latest Offers
      </h1>

      <div className="md:hidden" role="banner">
        <MobileBanner
          image={mobileImage}
          buttonClass="text-base uppercase mr-3 text-white"
          buttonLabel="Learn More"
          buttonPosition="bottom-8"
          aria-label="Explore mobile-exclusive promotions and offers"
        />
      </div>

      <div className="hidden md:block" role="banner">
        <DesktopBanner
          image={desktopImage}
          buttonClass="text-lg uppercase py-6 px-8"
          buttonLabel="Learn More"
          buttonPosition="bottom-14"
          aria-label="Explore detailed promotions and offers for desktop users"
        />
      </div>
    </section>
  );
}

export default HomeBanner;
