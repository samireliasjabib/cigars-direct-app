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
    <div className="w-full relative aspect-[767/432] md:hidden">
      <Image
        data={{
          ...image,
          width: 767,
          height: 432,
        }}
        sizes="100vw"
        className="w-full h-full object-cover"
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
