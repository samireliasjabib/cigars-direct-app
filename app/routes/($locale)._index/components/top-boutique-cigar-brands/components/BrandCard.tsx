import {Image} from '@shopify/hydrogen';
import {Link} from '~/components/shared/Link';
import type {BrandInfo} from '../types/types';

interface BrandCardProps {
  brand: BrandInfo;
}

function BrandCard({brand}: BrandCardProps) {
  return (
    <Link
      to={`/collections/${brand.handle}`}
      className="group relative flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-0.5"
    >
      <div className="relative w-full h-auto overflow-hidden transition-all duration-300 group-hover:shadow-lg rounded-lg">
        <Image
          data={{
            url: brand.imageUrl,
            altText: brand.imageAlt || brand.title,
            width: 300,
            height: 300,
          }}
          decoding="async"
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          sizes="(min-width: 1024px) 16.666vw, 33.333vw"
        />
      </div>
      <h3 className="mt-3 text-sm md:text-base font-medium text-gray-900 text-center transition-colors duration-300 group-hover:text-primary">
        {brand.title}
      </h3>
    </Link>
  );
}

export default BrandCard;
