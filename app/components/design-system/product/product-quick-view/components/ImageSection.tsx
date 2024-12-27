import {Image} from '@shopify/hydrogen';
import {Product} from '../types';

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
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          No image available
        </div>
      )}
    </div>
  );
}

export default ImageSection;
