import {Image} from '@shopify/hydrogen';

function ProductImageSwitcher({
  firstImage,
  secondImage,
}: {
  firstImage: {url: string; altText?: string};
  secondImage: {url: string; altText?: string};
}) {
  return (
    <div className="relative h-full">
      {/* First Image */}
      <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
        <Image
          data={firstImage}
          aspectRatio="5/5"
          loading="lazy"
          className="object-cover w-full h-auto border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
        />
      </div>
      {/* Second Image */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        <Image
          data={secondImage}
          aspectRatio="5/5"
          loading="lazy"
          className="object-cover w-full h-auto border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
}

export default ProductImageSwitcher;
