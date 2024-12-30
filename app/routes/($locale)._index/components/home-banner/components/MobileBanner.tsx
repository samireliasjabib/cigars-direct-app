import {Image} from '@shopify/hydrogen';
import {BannerProps} from '../types';
import {Button} from '~/components/design-system/ui/button';

function MobileBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  return (
    <div className="w-full relative md:hidden h-[500px]">
      <Image
        data={{
          url: image.url,
          altText: image.altText,
          width: 1920,
          height: 1080,
        }}
        height={1080}
        width={1920}
        className="object-cover w-full h-full absolute inset-0"
        loading="eager"
        aspectRatio="0.75"
        sizes="auto"
        style={{objectPosition: 'center'}}
      />
      <div className={`flex justify-center w-full ${buttonPosition}`}>
        <Button variant="default" className={buttonClass}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export default MobileBanner;
