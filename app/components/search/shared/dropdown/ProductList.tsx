import {Product} from '../../input-search/types/types';
import {ProductCard} from './ProductCard';

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
    <div className="grid grid-cols-2 gap-4">
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
