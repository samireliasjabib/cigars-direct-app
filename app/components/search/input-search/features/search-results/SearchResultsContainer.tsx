import {
  mockCollections,
  mockPages,
  mockProducts,
} from '../../constants/mockData';
import {Product} from '../../types/types';
import {SearchResults} from './components/SearchResults';

interface SearchResultsContainerProps {
  onProductClick: (product: Product) => void;
  isVisible: boolean;
}

export function SearchResultsContainer({
  onProductClick,
  isVisible,
}: SearchResultsContainerProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg rounded-b-lg overflow-hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-auto p-4">
        <SearchResults
          collections={[...mockCollections]}
          pages={[...mockPages]}
          products={[...mockProducts]}
          onProductClick={onProductClick}
        />
      </div>
    </div>
  );
}
