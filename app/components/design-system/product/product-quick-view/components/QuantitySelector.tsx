import {memo} from 'react';
import {Minus, Plus} from 'lucide-react';

type QuantitySelectorProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const QuantitySelector = memo(
  ({quantity, onIncrement, onDecrement}: QuantitySelectorProps) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-900">
        Quantity
      </label>
      <div className="flex items-center w-full border border-gray-300 bg-gray-50/50">
        <button
          onClick={onDecrement}
          className="px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span
          className="flex-1 text-center font-medium text-gray-900 py-2.5 bg-white border-x border-gray-300"
          aria-live="polite"
        >
          {quantity}
        </span>
        <button
          onClick={onIncrement}
          className="px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  ),
);
