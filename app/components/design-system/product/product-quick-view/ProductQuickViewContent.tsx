import {useSearchParams} from '@remix-run/react';
import {memo} from 'react';
import {DialogHeader, DialogTitle} from '../../ui/dialog';
import {OptionGroup} from './components/OptionGroup';
import {PriceDisplay} from './components/PriceDisplay';
import {useProductData} from './hooks/useProductData';
import {useVariantSelection} from './hooks/useVariantSelection';

function ProductQuickViewContent({productHandle}: {productHandle: string}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {product, isLoading} = useProductData(productHandle, searchParams);
  const {handleVariantSelect} = useVariantSelection(
    product,
    searchParams,
    setSearchParams,
  );

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle>{product.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        {product.options.map((option) => (
          <OptionGroup
            key={option.name}
            option={option}
            selectedValue={searchParams.get(option.name)}
            onSelect={handleVariantSelect}
          />
        ))}
      </div>

      {product.selectedVariant?.price && (
        <PriceDisplay amount={product.selectedVariant.price.amount} />
      )}
    </div>
  );
}

export default memo(ProductQuickViewContent);
