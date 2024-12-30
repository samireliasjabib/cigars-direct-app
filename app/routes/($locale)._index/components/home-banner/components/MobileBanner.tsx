import {Image} from '@shopify/hydrogen';
import {BannerProps} from '../types';
import {Button} from '~/components/design-system/ui/button';

function MobileBanner({
  image,
  buttonClass,
  buttonLabel,
  buttonPosition,
}: BannerProps) {
  // Optimizar URL para móvil usando los parámetros correctos de Shopify CDN
  const optimizedUrl = image.url
    .replace(/\.(png|jpg|jpeg)/, '_progressive.$1') // Habilitar carga progresiva
    .replace(
      /\?(.*)/,
      '?width=640&height=500&crop=center&quality=85&format=webp',
    );

  return (
    <div
      className="w-full relative md:hidden"
      style={{
        aspectRatio: '640/500',
        contain: 'layout paint',
      }}
    >
      <Image
        data={{
          url: optimizedUrl,
          altText: image.altText,
          width: 640,
          height: 500,
        }}
        width={640}
        height={500}
        className="object-cover w-full h-full"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        style={{
          objectPosition: 'center',
        }}
      />
      <div className={`flex justify-center w-full absolute ${buttonPosition}`}>
        <Button variant="default" className={buttonClass}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

// Agregar displayName para mejor debugging
MobileBanner.displayName = 'MobileBanner';

export default MobileBanner;
