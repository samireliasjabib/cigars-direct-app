import ProductCard from '../product-card/ProductCard';

function ProductVitrine() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from({length: 4}).map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}

export default ProductVitrine;
