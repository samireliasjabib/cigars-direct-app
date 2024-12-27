import {useFetcher} from '@remix-run/react';
import {useEffect, useMemo, useRef, useState} from 'react';
import type {ProductQuickBuyResponse} from '../types';

export function useProductData(productHandle: string) {
  const fetcherKey = useMemo(
    () => `product-fetcher-${productHandle}`,
    [productHandle],
  );

  const fetcher = useFetcher<ProductQuickBuyResponse>({key: fetcherKey});
  const [hasLoaded, setHasLoaded] = useState(false);
  const hasDataRef = useRef(false);

  useEffect(() => {
    if (!hasLoaded && !hasDataRef.current) {
      fetcher.load(`/api/product-quick-buy/${productHandle}`);
      hasDataRef.current = true;
      setHasLoaded(true);
    }
  }, [productHandle, hasLoaded]);

  return {
    isLoading: fetcher.state === 'loading' && !hasLoaded,
    product: fetcher.data?.product,
  };
}
