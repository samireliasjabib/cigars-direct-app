import {Image} from '@shopify/hydrogen';
import {Button} from '../ui/button';

function DesktopBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  return (
    <div className="w-full h-full relative">
      <Image
        data={image}
        sizes="(min-width: 768px)"
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

export default DesktopBanner;
