import CollectionList, {Collection} from './dropdown/CollectionList';
import PageList, {Page} from './dropdown/PageList';
import ProductList from './dropdown/ProductList';
import {Product} from '../types/types';
import {Button} from '~/components/design-system/ui/button';
import {MoveRight} from 'lucide-react';

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
    <div className="grid grid-cols-6 gap-1">
      <aside className="col-span-2 space-y-3">
        <CollectionList collections={collections} />
        <PageList pages={pages} />
      </aside>

      <main className="col-span-4">
        <div className="bg-gray-100 rounded-tr-md">
          <h2 className="text-sm font-normal uppercase px-2 py-1 text-black/50">
            Products
          </h2>
        </div>
        <ProductList products={products} onProductClick={onProductClick} />
        <div className="p-2">
          <Button
            variant={'ghost'}
            className="w-full rounded-full hover:bg-black/5 text-sm text-black/80 font-medium"
          >
            View all 41 results
            <MoveRight />
          </Button>
        </div>
      </main>
    </div>
  );
}

export default ProductSearchDropdown;
