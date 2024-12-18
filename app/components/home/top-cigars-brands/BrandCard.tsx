import {Image} from '@shopify/hydrogen';
import {BrandCardProps} from './types';

function BrandCard({imageUrl, altText}: BrandCardProps) {
  return (
    <div className="group relative flex justify-center items-center py-6 cursor-pointer">
      {/* Borders */}
      <div className="absolute top-0 left-0 h-[40%] w-full border-t border-l border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute top-0 right-0 h-[40%] w-full border-t border-r border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute bottom-0 left-0 h-[40%] w-full border-b border-l border-gray-200 transition-colors duration-300 group-hover:border-primary" />
      <div className="absolute bottom-0 right-0 h-[40%] w-full border-b border-r border-gray-200 transition-colors duration-300 group-hover:border-primary" />

      <div className="h-14 flex justify-center items-center">
        <Image
          data={{
            url: imageUrl,
            altText,
          }}
          className="object-contain filter grayscale hover:filter-none transition-all duration-300  transform group-hover:scale-110"
          width={110}
          height={60}
          aspectRatio="1:1"
        />
      </div>
    </div>
  );
}

export default BrandCard;