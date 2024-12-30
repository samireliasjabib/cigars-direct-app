import {useState, useCallback, useEffect, useRef} from 'react';
import {Product} from '../types/types';
import {SEARCH_CONSTANTS} from '../constants/constants';

interface UseSearchReturn {
  searchValue: string;
  isFocused: boolean;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleProductClick: (product: Product) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useSearch = (): UseSearchReturn => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
      setSearchValue('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleProductClick = useCallback((product: Product) => {
    console.log('Product clicked:', product);
    setSearchValue('');
    setIsFocused(false);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [],
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    // Don't immediately blur/clear to allow for click events to register
    setTimeout(() => {
      setIsFocused(false);
      setSearchValue('');
    }, SEARCH_CONSTANTS.BLUR_DELAY);
  }, []);

  return {
    searchValue,
    isFocused,
    handleSearchChange,
    handleFocus,
    handleBlur,
    handleProductClick,
    containerRef,
  };
};
