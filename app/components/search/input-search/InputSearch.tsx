import {SearchIcon} from './components/SearchIcon';
import ProductSearchDropdown from './components/ProductSearchDropdown';
import {mockCollections, mockPages, mockProducts} from './constants/mockData';
import {SEARCH_CLASSES, SEARCH_CONSTANTS} from './constants/constants';
import {SearchModal} from './components/modal/SearchModal';
import {useSearch} from './hooks/useSearch';
import {X} from 'lucide-react';
import {TopSearchedProducts} from './components/top-searched/TopSearchedProducts';
import SearchDropdown from './components/dropdown/SearchDropdown';

function InputSearch() {
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
    <>
      <div className="flex items-center">
        <div ref={containerRef} className="relative">
          <div className={SEARCH_CLASSES.INPUT_WRAPPER}>
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

          <SearchDropdown isVisible={Boolean(searchValue)}>
            <ProductSearchDropdown
              collections={[...mockCollections]}
              pages={[...mockPages]}
              products={mockProducts}
              onProductClick={handleProductClick}
            />
          </SearchDropdown>
        </div>

        {isFocused && (
          <button
            onClick={handleBlur}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-white hover:text-black ml-4"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-200 md:hidden
          ${isFocused ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          z-${SEARCH_CONSTANTS.Z_INDICES.BACKDROP}
        `}
        onClick={() => handleBlur()}
        role="presentation"
        aria-hidden={!isFocused}
      />

      <SearchModal isVisible={isFocused}>
        <TopSearchedProducts />
      </SearchModal>
    </>
  );
}

export default InputSearch;
