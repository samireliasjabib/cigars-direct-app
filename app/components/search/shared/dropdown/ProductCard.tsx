import {Image} from '@shopify/hydrogen';
import {Product} from '../../input-search/types/types';

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
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-sm text-black">{product.name}</h3>
        <div className="flex gap-2 text-xs">
          <span className="text-black/40">SKU:</span>
          <p className="text-black/40">{product.sku}</p>
        </div>
        <p className="text-sm text-black/80">{product.product_vendor}</p>
        <p className="text-sm text-black">{product.price}</p>
      </div>
    </div>
  );
}
