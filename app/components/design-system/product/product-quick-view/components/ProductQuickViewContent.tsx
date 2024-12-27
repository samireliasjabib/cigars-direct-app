import {useSearchParams} from '@remix-run/react';
import {memo, useState, useCallback} from 'react';
import {OptionGroup} from './OptionGroup';
import {PriceDisplay} from './PriceDisplay';
import {useProductData} from '../hooks/useProductData';
import {useVariantSelection} from '../hooks/useVariantSelection';
import {Separator} from '../../../ui/separator';
import {Button} from '~/components/Button';
import {useVariantPrices} from '../hooks/useVariantPrices';
import {QuantitySelector} from './QuantitySelector';
import {BenefitsList} from './BenefitsList';
import ProductQuickViewRating from './ProductQuickViewRating';
import ImageSection from './ImageSection';
import ProductQuickViewContentSkeleton from './ProductQuickViewContentSkeleton';
import {CartForm} from '@shopify/hydrogen';

type ProductQuickViewContentProps = {
  productHandle: string;
  onClose: (open: boolean) => void;
};

function ProductQuickViewContent({
  productHandle,
  onClose,
}: ProductQuickViewContentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {product, isLoading} = useProductData(productHandle, searchParams);
  const {handleVariantSelect} = useVariantSelection(
    product,
    searchParams,
    setSearchParams,
  );
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = useCallback((increment: number) => {
    setQuantity((prev) => Math.max(1, Math.min(99, prev + increment)));
  }, []);

  const variantPrices = useVariantPrices(product);

  if (
    isLoading ||
    !product?.selectedVariant ||
    !product.selectedVariant.image
  ) {
    return <ProductQuickViewContentSkeleton />;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        Product not found
      </div>
    );
  }

  const selectedVariant = product.selectedVariant;
  if (!selectedVariant) {
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full min-h-[600px] max-h-[80vh] lg:overflow-hidden">
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
        <ImageSection product={product} />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 h-full px-1">
        <div className="space-y-3 lg:space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
            {product.title}
          </h2>
          <ProductQuickViewRating />
          <div className="flex items-center justify-between">
            {selectedVariant?.price && (
              <PriceDisplay
                amount={selectedVariant.price.amount}
                compareAtPrice={selectedVariant.compareAtPrice?.amount}
              />
            )}
          </div>
        </div>

        <Separator className="hidden lg:block" />

        <div className="space-y-4 lg:space-y-6">
          {product.options.map((option) => (
            <OptionGroup
              key={option.name}
              option={option}
              selectedValue={searchParams.get(option.name) || ''}
              onSelect={handleVariantSelect}
              prices={variantPrices}
            />
          ))}
        </div>

        <Separator className="hidden lg:block" />

        <QuantitySelector
          quantity={quantity}
          onIncrement={() => handleQuantityChange(1)}
          onDecrement={() => handleQuantityChange(-1)}
        />

        <CartForm
          route="/cart"
          inputs={{
            lines: [
              {
                merchandiseId: selectedVariant.id,
                quantity,
              },
            ],
          }}
          action={CartForm.ACTIONS.LinesAdd}
        >
          {(fetcher) => {
            const isAdding = fetcher.state !== 'idle';

            return (
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium text-lg transition-colors py-3"
                disabled={isAdding || !selectedVariant?.id}
                onClick={() => {
                  if (!selectedVariant?.id) return;
                  if (!isAdding) {
                    setTimeout(() => onClose(false), 300);
                  }
                }}
              >
                {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
              </Button>
            );
          }}
        </CartForm>

        <BenefitsList />
      </div>
    </div>
  );
}

export default memo(ProductQuickViewContent);
