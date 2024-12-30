import CollectionList, {Collection} from './dropdown/CollectionList';
import PageList, {Page} from './dropdown/PageList';
import ProductList from './dropdown/ProductList';
import {Product} from '../types/types';

interface MainProps {
  products: Product[];
  collections: Collection[];
  pages: Page[];
  onProductClick?: (product: Product) => void;
}

function ProductSearchDropdown({
  products,
  collections,
  pages,
  onProductClick,
}: MainProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Sidebar for Collections and Pages */}
      <aside className="col-span-1 space-y-6">
        <CollectionList collections={collections} />
        <PageList pages={pages} />
      </aside>

      {/* Main Content for Products */}
      <main className="col-span-3">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <ProductList products={products} onProductClick={onProductClick} />
      </main>
    </div>
  );
}

export default ProductSearchDropdown;
