import {cn} from '~/lib/utils';
import type {VariantSelectorProps} from '../types';

export function VariantSelector({
  variants,
  selectedIndex,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b pb-2">
      <span className="text-sm text-gray-600">Variant</span>
      <div className="flex gap-2">
        {variants.map((variant, index) => (
          <button
            key={variant.title}
            onClick={() => onSelect(index)}
            className={cn(
              'px-3 py-1 text-sm rounded-full border transition-all',
              selectedIndex === index
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400',
            )}
          >
            {variant.title} - ${variant.price.amount}
          </button>
        ))}
      </div>
    </div>
  );
}
