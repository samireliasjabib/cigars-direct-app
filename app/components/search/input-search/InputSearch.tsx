import {SearchIcon} from './components/SearchIcon';
import ProductSearchDropdown from './components/ProductSearchDropdown';
import {mockCollections, mockPages, mockProducts} from './constants/mockData';
import {SEARCH_CLASSES, SEARCH_CONSTANTS} from './constants/constants';
import {SearchDropdown} from '~/components/search/input-search/components/dropdown/SearchDropdown';
import {SearchModal} from '~/components/search/input-search/components/modal/SearchModal';
import {useSearch} from './hooks/useSearch';
import {X} from 'lucide-react';
import ProductCard from '~/components/design-system/product/product-card/ProductCard';

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
              products={[...mockProducts.search]}
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

      {/* Backdrop for mobile */}
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
        <div className="py-8 w-full">
          <h2 className="text-2xl font-bold mb-6">Top searched</h2>
          <div className="grid grid-cols-6 gap-4 w-full">
            {Array.from({length: 6}, (_, index) => {
              const hasSoldOut = Math.random() < 0.5;
              return (
                <ProductCard
                  decimals="14"
                  handle=""
                  soldOut={hasSoldOut}
                  disabledActions
                  secondImageMedia={{
                    url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/alec-bradley-prensado-torpedo-5pack_360x_cbfa6aa9-34de-489f-bd35-f062c13a20c2.jpg?v=1734577574',
                    altText: 'second image media',
                  }}
                  title=""
                  whole="99"
                  firstImageMedia={{
                    url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/padron-1926-anniversary-no-48-maduro-ca-2023-ranking-2_280x_7974420d-aca7-4fbb-b040-389502b88137.jpg?v=1734537576',
                    altText: 'second image media',
                  }}
                />
              );
            })}
          </div>
        </div>
      </SearchModal>
    </>
  );
}

export default InputSearch;
