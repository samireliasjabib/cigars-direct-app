import {memo, useMemo} from 'react';

interface PriceDisplayProps {
  amount: string;
}

export const PriceDisplay = memo(function PriceDisplay({amount}: PriceDisplayProps) {
  const formattedPrice = useMemo(() => {
    return `$${parseFloat(amount).toFixed(2)}`;
  }, [amount]);

  return (
    <div className="space-y-2 pt-4 border-t">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Price</span>
        <span className="text-lg font-semibold">{formattedPrice}</span>
      </div>
    </div>
  );
});
