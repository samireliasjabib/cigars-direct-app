import {Money} from '@shopify/hydrogen';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';

interface CartLinePriceProps {
  line: CartLine;
  [key: string]: any;
}

export function CartLinePrice({line, ...passthroughProps}: CartLinePriceProps) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const compareAtAmount = line.cost.compareAtAmountPerQuantity;
  const regularAmount = line.cost.totalAmount;
  const quantity = line.quantity || 1;

  if (!regularAmount || !compareAtAmount) return null;

  // Calculate total compare price based on quantity
  const totalCompareAtAmount = {
    ...compareAtAmount,
    amount: String(Number(compareAtAmount.amount) * quantity),
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <Money
        withoutTrailingZeros
        data={totalCompareAtAmount}
        className="line-through text-gray-500 text-sm"
        {...passthroughProps}
      />
      <Money
        withoutTrailingZeros
        data={regularAmount}
        className="text-sm font-medium"
        {...passthroughProps}
      />
    </div>
  );
}
