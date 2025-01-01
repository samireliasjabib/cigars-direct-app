import CollectionList, {
  Collection,
} from '../../../components/dropdown/CollectionList';
import PageList, {Page} from '../../../components/dropdown/PageList';
import {Product} from '../../../types/types';
import {ProductCard} from './ProductCard';

interface SearchResultsProps {
  collections: Collection[];
  pages: Page[];
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function SearchResults({
  collections,
  pages,
  products,
  onProductClick,
}: SearchResultsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CollectionList collections={collections} />
        <PageList pages={pages} />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
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
