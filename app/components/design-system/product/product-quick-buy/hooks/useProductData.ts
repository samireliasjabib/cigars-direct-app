import {useFetcher} from '@remix-run/react';
import {useEffect, useState} from 'react';
import type {ProductQuickBuyResponse} from '../types';

export function useProductData(productHandle: string) {
  const fetcher = useFetcher<ProductQuickBuyResponse>();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      fetcher.load(`/api/product-quick-buy/${productHandle}`);
      setHasLoaded(true);
    }
  }, [productHandle, hasLoaded]);

  return {
    isLoading: fetcher.state === 'loading' && !hasLoaded,
    product: fetcher.data?.product,
  };
}
