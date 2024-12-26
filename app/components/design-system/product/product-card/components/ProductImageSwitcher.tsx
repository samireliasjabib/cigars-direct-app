import {Image} from '@shopify/hydrogen';

function ProductImageSwitcher({
  firstImage,
  secondImage,
}: {
  firstImage: {url: string; altText?: string};
  secondImage: {url: string; altText?: string};
}) {
  const imageSize = {
    width: 400,
    height: 400,
  };

  return (
    <div className="relative aspect-square">
      {/* First Image */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
        <Image
          data={{
            ...firstImage,
            ...imageSize,
          }}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover w-full h-full border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Second Image */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        <Image
          data={{
            ...secondImage,
            ...imageSize,
          }}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover w-full h-full border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default ProductImageSwitcher;
