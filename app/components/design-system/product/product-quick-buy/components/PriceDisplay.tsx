import type {PriceDisplayProps} from '../types';

export function PriceDisplay({price, compareAtPrice}: PriceDisplayProps) {
  console.log(price, 'price in price display');
  const [dollars, cents = '00'] = price.amount.split('.');

  return (
    <div className="flex items-center justify-between border-b pb-2">
      <span className="text-sm text-gray-600">Price</span>
      <div className="flex flex-row gap-4 items-center justify-end">
        <span className="text-lg font-semibold text-gray-900">
          ${dollars}
          <sup className="text-xs ml-0.5">
            {cents === '0' ? '00' : cents || '00'}
          </sup>
        </span>
        {compareAtPrice && (
          <span className="text-lg text-gray-500 line-through">
            ${compareAtPrice.amount}
          </span>
        )}
      </div>
    </div>
  );
}
