import type {Product} from './types';
import {ProductCard} from '../../../../search/input-search/components/dropdown/ProductCard';

interface ProductListProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

function ProductList({products, onProductClick}: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">No products found</div>
    );
  }

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
}

export default ProductList;
