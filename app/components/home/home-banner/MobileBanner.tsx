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
    <div className="w-full relative h-[500px] md:hidden">
      <Image
        data={{
          ...image,
        }}
        className="w-full h-full object-cover"
        height="100%"
        width="100%"
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
