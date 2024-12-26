import {Image} from '@shopify/hydrogen';
import {BrandCardProps} from '../types/types';

function BrandCard({imageUrl, altText}: BrandCardProps) {
  return (
    <div
      className="group relative flex justify-center items-center h-32 py-6 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`View details about the brand ${altText}`}
    >
      {/* Borders */}
      <div className="absolute top-0 left-0 h-[40%] w-full border-t border-l border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute top-0 right-0 h-[40%] w-full border-t border-r border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute bottom-0 left-0 h-[40%] w-full border-b border-l border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute bottom-0 right-0 h-[40%] w-full border-b border-r border-gray-200 transition-colors duration-300 group-hover:border-primary" />

      <div className="flex justify-center items-center w-full h-14">
        <Image
          data={{
            url: imageUrl,
            altText,
            width: 110,
            height: 56,
          }}
          className="object-contain h-14 filter grayscale group-hover:filter-none transition-all duration-300 transform group-hover:scale-110"
          width={110}
          height={56}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default BrandCard;
