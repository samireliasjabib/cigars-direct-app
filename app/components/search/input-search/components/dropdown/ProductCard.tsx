import type {Product} from '../../layout/header/desktop/search/types';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({product, onClick}: ProductCardProps) {
  return (
    <div
      className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
      onClick={() => onClick?.(product)}
    >
      <div className="w-16 h-16 bg-gray-200 rounded-md">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div>
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.price}</p>
      </div>
    </div>
  );
}
