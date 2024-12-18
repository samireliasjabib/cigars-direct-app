import BrandCard from './BrandCard';
import {BrandGridProps} from './types';

function BrandGrid({brands}: BrandGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {brands.map((brand) => (
        <BrandCard key={brand.id} {...brand} />
      ))}
    </div>
  );
}

export default BrandGrid;
