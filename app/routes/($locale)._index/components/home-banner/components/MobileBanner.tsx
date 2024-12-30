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
    <div className="w-full relative md:hidden">
      <Image
        data={{
          url: image.url,
          altText: image.altText,
          // Reduce initial image dimensions for faster loading
          width: 640,
          height: 853,
        }}
        // Using smaller dimensions for mobile
        width={640}
        height={853}
        className="object-cover w-full h-full"
        loading="eager"
        // Use proper aspect ratio for mobile
        aspectRatio="3/4"
        // Implement responsive image loading
        sizes="(max-width: 640px) 100vw, 640px"
        // Explicitly set fetchpriority for LCP
        fetchPriority="high"
        // Enable native lazy loading as fallback
        decoding="async"
        style={{
          objectPosition: 'center',
          // Add container aspect ratio to prevent layout shift
          aspectRatio: '3/4',
        }}
      />
      <div
        className={`flex justify-center w-full absolute ${buttonPosition}`}
        // Ensure button container doesn't affect LCP
        style={{willChange: 'transform'}}
      >
        <Button variant="default" className={buttonClass}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

// Add display name for better debugging
MobileBanner.displayName = 'MobileBanner';

export default MobileBanner;
