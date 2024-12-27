import {memo} from 'react';
import type {ProductOption} from '../types';
import {OptionButton} from './OptionButton';

interface OptionGroupProps {
  option: ProductOption;
  selectedValue: string | null;
  onSelect: (name: string, value: string) => void;
  prices?: Record<string, string>;
}

export const OptionGroup = memo(function OptionGroup({
  option,
  selectedValue,
  onSelect,
  prices,
}: OptionGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-sm text-gray-900">Count</h4>
        {selectedValue && (
          <span className="text-sm text-gray-500">
            Selected: {selectedValue}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {option.optionValues.map((value) => (
          <OptionButton
            key={value.name}
            value={value}
            isSelected={selectedValue === value.name}
            onClick={() => onSelect(option.name, value.name)}
            price={prices?.[value.name]}
          />
        ))}
      </div>
    </div>
  );
});
