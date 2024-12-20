import type {TopBoutiqueCigarBrandsProps} from './types/types';
import {formatBrandsData} from './utils/utils';
import Heading from '~/components/design-system/heading/Heading';
import BrandCard from './components/BrandCard';

function TopBoutiqueCigarBrands({
  topBoutiqueCigarsBrands,
}: TopBoutiqueCigarBrandsProps) {
  const brands = formatBrandsData(topBoutiqueCigarsBrands);

  return (
    <section
      role="region"
      aria-label="Top Boutique Brands"
      className="wrapper pb-10 md:pb-20"
    >
      <Heading
        title="Top Boutique Brands"
        viewAllLink="/collections/top-boutique-cigar-brands"
      />
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 mt-6">
        {brands.map((brand) => (
          <BrandCard key={brand.handle} brand={brand} />
        ))}
      </div>
    </section>
  );
}

export default TopBoutiqueCigarBrands;
