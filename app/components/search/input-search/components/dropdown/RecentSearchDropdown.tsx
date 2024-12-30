import {Link} from '@remix-run/react';
import {ProductCard} from './ProductCard';
import {Product} from '../../types/types';

interface RecentSearchDropdownProps {
  recentProducts: Product[];
  popularProducts: Product[];
  onProductClick: (product: Product) => void;
}

export default function RecentSearchDropdown({
  recentProducts,
  popularProducts,
  onProductClick,
}: RecentSearchDropdownProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Recent Searches */}
      <div className="space-y-6">
        <h2 className="text-gray-500 font-medium">RECENT SEARCHES</h2>
        <div className="space-y-4">
          {recentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="space-y-6">
        <h2 className="text-gray-500 font-medium">POPULAR SEARCHES</h2>
        <div className="space-y-4">
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}