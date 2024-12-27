import {Image} from '@shopify/hydrogen';
import {Product} from '../types';
import {Skeleton} from '~/components/Skeleton';

function ImageSection({product}: {product: Product}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white border border-gray-200 overflow-hidden">
      {product?.selectedVariant?.image ? (
        <Image
          data={{
            url: product.selectedVariant.image.url,
            width: product.selectedVariant.image.width,
            height: product.selectedVariant.image.height,
            altText: product.selectedVariant.image.altText || product.title,
          }}
          width={600}
          height={300}
          className="object-contain h-full"
          sizes="(min-width: 1024px) 500px, 100vw"
        />
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </div>
  );
}

export default ImageSection;
