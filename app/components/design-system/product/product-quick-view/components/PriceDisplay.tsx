import {memo} from 'react';

interface PriceDisplayProps {
  amount: string;
  compareAtPrice?: string;
}

export const PriceDisplay = memo(function PriceDisplay({
  amount,
  compareAtPrice,
}: PriceDisplayProps) {
  const [dollars, cents = '00'] = amount.split('.');
  const formattedPrice = `$${dollars}${cents !== '00' ? `.${cents}` : ''}`;
  const isOnSale =
    compareAtPrice && parseFloat(compareAtPrice) > parseFloat(amount);

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-gray-900">{formattedPrice}</span>
      {isOnSale && compareAtPrice && (
        <span className="text-lg text-gray-500 line-through">
          ${parseFloat(compareAtPrice).toFixed(2)}
        </span>
      )}
    </div>
  );
});
