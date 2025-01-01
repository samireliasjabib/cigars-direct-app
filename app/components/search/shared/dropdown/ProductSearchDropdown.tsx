import {Product} from '../../input-search/types/types';
import {Button} from '~/components/design-system/ui/button';
import {MoveRight} from 'lucide-react';
import PageList, {Page} from './PageList';
import ProductList from './ProductList';
import CollectionList, {Collection} from './CollectionList';

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
    <div className="fixed left-4 right-4 top-[64px] h-[50vh] bg-white shadow-lg overflow-y-auto z-50 rounded-md md:relative md:inset-auto md:h-auto md:overflow-visible md:z-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-1">
        <aside className="space-y-3 md:col-span-2">
          <CollectionList collections={collections} />
          <PageList pages={pages} />
        </aside>

        <main className="md:col-span-4">
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
    </div>
  );
}

export default ProductSearchDropdown;
