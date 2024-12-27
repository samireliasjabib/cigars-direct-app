import {useFetcher} from '@remix-run/react';
import type {ProductQuickViewQuery} from 'storefrontapi.generated';
import {useEffect} from 'react';
import type {Product} from '../types';

export function useProductData(productHandle: string, searchParams: URLSearchParams) {
  const fetcher = useFetcher<ProductQuickViewQuery>();

  useEffect(() => {
    if (fetcher.state === 'idle') {
      fetcher.load(`/api/product-quick-view/${productHandle}?${searchParams}`);
    }
  }, [productHandle, searchParams]);

  return {
    product: fetcher.data?.product as Product | undefined,
    isLoading: fetcher.state === 'loading',
  };
}
