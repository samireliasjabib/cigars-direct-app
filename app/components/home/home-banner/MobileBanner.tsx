import {Image} from '@shopify/hydrogen';
import {BannerProps} from './types';
import {Button} from '../../ui/button';

function MobileBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  return (
    <div className="w-full h-full relative">
      <Image
        data={image}
        sizes="(max-width: 767px)"
        className="w-full h-auto"
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
