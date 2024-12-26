import {useFetcher} from '@remix-run/react';
import {useEffect} from 'react';

function ProductQuickBuyContent({productHandle}: {productHandle: string}) {
  console.log(productHandle);
  const fetcher = useFetcher();

  useEffect(() => {
    fetcher.load(`/api/product-quick-buy/${productHandle}`);
  }, [productHandle]);

  return <div>content</div>;
}

export default ProductQuickBuyContent;
