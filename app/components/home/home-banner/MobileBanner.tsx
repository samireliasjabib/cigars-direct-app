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
    <div className="w-full relative aspect-[16/9] md:aspect-[21/9]">
      <Image
        data={{
          ...image,
          width: 767,
          height: 432,
        }}
        sizes="(max-width: 767px) 100vw, 767px"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="sync"
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
