import {useState} from 'react';
import type {CartLineInput} from '@shopify/hydrogen/storefront-api-types';
import {Skeleton} from '~/components/Skeleton';
import {useProductData} from '../hooks/useProductData';
import {PriceDisplay} from './PriceDisplay';
import {VariantSelector} from './VariantSelector';
import {CartButtons} from './CartButtons';
import type {ProductQuickBuyProps} from '../types';
import ProductQuickBuyContentSkeleton from './ProductBuyContentSkeleton';

function ProductQuickBuyContent({
  productHandle,
  onClose,
}: ProductQuickBuyProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const {isLoading, product} = useProductData(productHandle);

  if (isLoading || !product?.variants) {
    return <ProductQuickBuyContentSkeleton />;
  }

  const variants = product?.variants.nodes || [];

  if (!variants.length) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-gray-600">
        Product not available.
      </div>
    );
  }

  const selectedVariant = variants[selectedVariantIndex];
  const cartLines: CartLineInput[] = [
    {
      merchandiseId: selectedVariant.id,
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <PriceDisplay
        price={selectedVariant.price}
        compareAtPrice={selectedVariant.compareAtPrice}
      />

      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-sm text-gray-600">Count</span>
        <span className="text-sm text-gray-700">{selectedVariant.title}</span>
      </div>

      <VariantSelector
        variants={variants}
        selectedIndex={selectedVariantIndex}
        onSelect={setSelectedVariantIndex}
      />

      <CartButtons cartLines={cartLines} onClose={onClose} />
    </div>
  );
}

export default ProductQuickBuyContent;
