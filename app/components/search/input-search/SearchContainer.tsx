import {SearchBar} from './features/search-bar/SearchBar';
import {SearchResultsContainer} from './features/search-results/SearchResultsContainer';
import {TopSearchedContainer} from './features/top-searched/TopSearchedContainer';
import {useSearch} from './hooks/useSearch';

export function SearchContainer() {
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
      <div ref={containerRef} className="relative">
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
        />

        <SearchResultsContainer
          isVisible={Boolean(searchValue)}
          onProductClick={handleProductClick}
        />

        <TopSearchedContainer isVisible={isFocused} />
      </div>
    </>
  );
}
