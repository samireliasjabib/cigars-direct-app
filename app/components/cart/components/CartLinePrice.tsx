import {Money} from '@shopify/hydrogen';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';

interface CartLinePriceProps {
  line: CartLine;
  priceType?: 'regular' | 'compareAt';
  [key: string]: any;
}

export function CartLinePrice({
  line,
  priceType = 'regular',
  ...passthroughProps
}: CartLinePriceProps) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />;
}
