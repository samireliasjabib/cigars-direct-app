import BrandCard from './BrandCard';
import {BrandGridProps} from './types';

function BrandGrid({brands}: BrandGridProps) {
  return (
    <div className="grid grid-cols-2 sm:flex flex-wrap items-center justify-center md:grid-cols-5 md:grid gap-2">
      {brands.map((brand) => (
        <BrandCard key={brand.id} {...brand} />
      ))}
    </div>
  );
}

export default BrandGrid;
