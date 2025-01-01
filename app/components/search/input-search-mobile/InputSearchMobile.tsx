import {SearchIcon} from '../input-search/components/SearchIcon';
import ProductSearchDropdown from '../shared/dropdown/ProductSearchDropdown';
import {
  mockCollections,
  mockPages,
  mockProducts,
} from '../input-search/constants/mockData';
import {SEARCH_CLASSES} from '../input-search/constants/constants';
import {useSearch} from '../input-search/hooks/useSearch';
import {X} from 'lucide-react';

import * as Dialog from '@radix-ui/react-dialog';

export function InputSearchMobile() {
  const {
    searchValue,
    isFocused,
    handleSearchChange,
    handleFocus,
    handleBlur,
    handleProductClick,
    containerRef,
  } = useSearch();

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="flex items-center gap-4 bg-black p-4">
        <div className={`${SEARCH_CLASSES.INPUT_WRAPPER} flex-1`}>
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={SEARCH_CLASSES.INPUT}
            name="q"
            aria-label="Search products"
            aria-expanded={isFocused}
            role="searchbox"
            autoComplete="off"
          />
          <SearchIcon />
        </div>

        <Dialog.Close asChild>
          <button
            className="rounded-full p-2 text-white"
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>
        </Dialog.Close>
      </div>

      {searchValue && (
        <ProductSearchDropdown
          collections={[...mockCollections]}
          pages={[...mockPages]}
          products={[...mockProducts]}
          onProductClick={handleProductClick}
        />
      )}
    </div>
  );
}
