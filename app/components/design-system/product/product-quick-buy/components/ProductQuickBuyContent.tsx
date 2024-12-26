import {useFetcher} from '@remix-run/react';
import {useEffect, useState} from 'react';
import {ProductQuickBuyQuery} from 'storefrontapi.generated';
import {Button} from '~/components/design-system/ui/button';
import {cn} from '~/lib/utils';

interface ProductQuickBuyResponse {
  product: ProductQuickBuyQuery['product'];
}

function ProductQuickBuyContent({productHandle}: {productHandle: string}) {
  const fetcher = useFetcher<ProductQuickBuyResponse>();
  const [selectedVariant, setSelectedVariant] = useState<'single' | 'box'>(
    'single',
  );

  useEffect(() => {
    fetcher.load(`/api/product-quick-buy/${productHandle}`);
  }, [productHandle]);

  if (fetcher.state === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
      </div>
    );
  }

  const {product} = fetcher.data || {};
  const firstVariant = product?.variants.nodes[0];

  if (!firstVariant) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-gray-600">
        Product not available.
      </div>
    );
  }

  const [dollars, cents] = firstVariant.price.amount.split('.');
  const boxPrice = (Number(firstVariant.price.amount) * 10).toFixed(2);

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Price Display */}
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Price</span>
        <span className="text-lg font-semibold text-gray-900">
          ${dollars}.{cents || '00'}
        </span>
      </div>

      {/* Count Display */}
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Count</span>
        <span className="text-sm text-gray-700">
          {selectedVariant === 'single' ? '1 Cigar' : 'Box of 10'}
        </span>
      </div>

      {/* Variant Selection */}
      <div className="flex items-center justify-between gap-4 border-b pb-2">
        <span className="text-sm text-gray-600">Variant</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedVariant('single')}
            className={cn(
              'px-3 py-1 text-sm rounded-full border transition-all',
              selectedVariant === 'single'
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400',
            )}
          >
            Single - ${firstVariant.price.amount}
          </button>
          <button
            onClick={() => setSelectedVariant('box')}
            className={cn(
              'px-3 py-1 text-sm rounded-full border transition-all',
              selectedVariant === 'box'
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400',
            )}
          >
            Box - ${boxPrice}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 py-3 text-sm font-medium hover:bg-gray-50"
        >
          Add to Cart
        </Button>
        <Button
          variant="default"
          className="flex-1 py-3 text-sm font-medium bg-primary hover:bg-primary/90"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ProductQuickBuyContent;
