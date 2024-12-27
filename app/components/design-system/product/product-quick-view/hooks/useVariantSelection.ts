import {useCallback, useEffect} from 'react';
import type {Product} from '../types';

export function useVariantSelection(
  product: Product | undefined,
  searchParams: URLSearchParams,
  setSearchParams: (
    params: URLSearchParams,
    opts?: {preventScrollReset?: boolean; replace?: boolean},
  ) => void,
) {
  // Set default variant options
  useEffect(() => {
    if (product?.options?.length) {
      const newSearchParams = new URLSearchParams(searchParams);
      let shouldUpdateParams = false;

      product.options.forEach((option) => {
        if (!newSearchParams.has(option.name)) {
          const defaultValue = option.optionValues[0]?.name;
          if (defaultValue) {
            newSearchParams.set(option.name, defaultValue);
            shouldUpdateParams = true;
          }
        }
      });

      if (shouldUpdateParams) {
        setSearchParams(newSearchParams, {
          preventScrollReset: true,
          replace: true,
        });
      }
    }
  }, [product, searchParams, setSearchParams]);

  const handleVariantSelect = useCallback(
    (name: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(name, value);
      setSearchParams(newSearchParams, {
        preventScrollReset: true,
        replace: true,
      });
    },
    [searchParams, setSearchParams],
  );

  return {handleVariantSelect};
}
