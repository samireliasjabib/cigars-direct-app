import {Image} from '@shopify/hydrogen';
import {Button} from '../../ui/button';
import {BannerProps} from './types';

function DesktopBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  return (
    <div className="w-full relative aspect-[21/9] hidden md:block">
      <Image
        data={{
          ...image,
          width: 1920,
          height: 820,
        }}
        sizes="(min-width: 768px) 100vw, 1px"
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

export default DesktopBanner;
