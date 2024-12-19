import {CollectionByHandleQuery} from 'storefrontapi.generated';
import ProductCard from '../product-card/ProductCard';

function ProductVitrine({
  products,
}: {
  products: NonNullable<CollectionByHandleQuery['collection']>['products'];
}) {
  if (!products?.edges.length) return null;
  return (
    <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
      {products.edges.map((product, i) => (
        <ProductCard key={product.node.id} product={product.node} />
      ))}
    </div>
  );
}

export default ProductVitrine;
