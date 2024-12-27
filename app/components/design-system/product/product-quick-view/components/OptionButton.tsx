import {memo} from 'react';
import type {OptionValue} from '../types';

interface OptionButtonProps {
  value: OptionValue;
  isSelected: boolean;
  onClick: () => void;
  price?: string;
}

export const OptionButton = memo(function OptionButton({
  value,
  isSelected,
  onClick,
  price,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 border  text-sm font-medium transition-all ${
        isSelected
          ? 'border-primary bg-primary/5 text-primary'
          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
      }`}
    >
      <span>{value.name}</span>
      {price && (
        <span
          className={`ml-2 ${isSelected ? 'text-primary' : 'text-gray-500'}`}
        >
          • ${parseFloat(price).toFixed(2)}
        </span>
      )}
    </button>
  );
});
