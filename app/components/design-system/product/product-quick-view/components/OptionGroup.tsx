import {memo, useCallback} from 'react';
import type {ProductOption} from '../types';
import {OptionButton} from './OptionButton';

interface OptionGroupProps {
  option: ProductOption;
  selectedValue: string | null;
  onSelect: (name: string, value: string) => void;
}

export const OptionGroup = memo(function OptionGroup({
  option,
  selectedValue,
  onSelect,
}: OptionGroupProps) {
  const handleSelect = useCallback(
    (value: string) => {
      onSelect(option.name, value);
    },
    [option.name, onSelect],
  );

  return (
    <div className="space-y-2">
      <h4 className="font-medium text-sm text-gray-700">{option.name}</h4>
      <div className="flex flex-wrap gap-2">
        {option.optionValues.map((value) => (
          <OptionButton
            key={value.name}
            value={value}
            isSelected={selectedValue === value.name}
            onClick={() => handleSelect(value.name)}
          />
        ))}
      </div>
    </div>
  );
});
