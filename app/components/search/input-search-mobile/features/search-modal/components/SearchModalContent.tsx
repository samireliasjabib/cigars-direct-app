import {InputSearchMobile} from '../../../InputSearchMobile';
import {
  mockCollections,
  mockPages,
  mockProducts,
} from '../../../../input-search/constants/mockData';
import {useSearch} from '../../../../input-search/hooks/useSearch';
import ProductSearchDropdown from '~/components/search/shared/dropdown/ProductSearchDropdown';

export function SearchModalContent() {
  const {searchValue, handleProductClick} = useSearch();

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="bg-black p-4"></div>
    </div>
  );
}
