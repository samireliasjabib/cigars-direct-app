import BrandCard from './BrandCard';
import {BrandGridProps} from '../types/types';

function BrandGrid({brands}: BrandGridProps) {
  return (
    <ul
      className="grid grid-cols-2 sm:flex flex-wrap items-center justify-center md:grid-cols-5 md:grid gap-2"
      role="list"
      aria-label="Top Cigar Brands"
    >
      {brands.map((brand) => (
        <li key={brand.id} role="listitem">
          <BrandCard {...brand} />
        </li>
      ))}
    </ul>
  );
}

export default BrandGrid;
