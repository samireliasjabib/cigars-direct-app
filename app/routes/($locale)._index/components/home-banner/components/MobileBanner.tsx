import {Image} from '@shopify/hydrogen';
import {BannerProps} from '../types';
import {Button} from '~/components/design-system/ui/button';
import BanneImage from '../../../../../assets/banner-mobile.webp';

function MobileBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  return (
    <div className="w-full relative  md:hidden">
      <Image
        data={{
          url: BanneImage,
          altText: 'banner mobile',
          width: 500,
          height: 500,
        }}
        className="object-cover"
        height={500}
        width={500}
        loading="eager"
        decoding="async"
      />
      <div className={`flex justify-center w-full absolute ${buttonPosition}`}>
        <Button variant="default" className={buttonClass}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export default MobileBanner;
