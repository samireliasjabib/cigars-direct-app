import {memo} from 'react';
import type {OptionValue} from '../types';

interface OptionButtonProps {
  value: OptionValue;
  isSelected: boolean;
  onClick: () => void;
}

export const OptionButton = memo(function OptionButton({
  value,
  isSelected,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      className={`px-3 py-1 text-sm rounded-full border transition-all ${
        isSelected
          ? 'bg-primary/10 border-primary text-primary'
          : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400'
      }`}
      onClick={onClick}
    >
      {value.name}
    </button>
  );
});
