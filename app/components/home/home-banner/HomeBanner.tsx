import {HomeBannerProps} from './types';

import MobileBanner from './MobileBanner';
import DesktopBanner from './DesktopBanner';

function HomeBanner({mobileImage, desktopImage}: HomeBannerProps) {
  return (
    <div className="home-banner">
      <div className="md:hidden">
        <MobileBanner
          image={mobileImage}
          buttonClass="text-base uppercase mr-3"
          buttonLabel="Click Here"
          buttonPosition="bottom-8"
          aria-label="Click here to learn more"
        />
      </div>

      <div className="hidden md:block">
        <DesktopBanner
          image={desktopImage}
          buttonClass="text-lg uppercase py-6 px-8"
          buttonLabel="Click Here"
          buttonPosition="bottom-14"
          aria-label="Click here to learn more"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
