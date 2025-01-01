import {X} from 'lucide-react';
import {SEARCH_CLASSES} from '../../constants/constants';
import {SearchIcon} from '../../components/SearchIcon';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}

export function SearchBar({
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
}: SearchBarProps) {
  return (
    <div className="flex items-center">
      <div className={SEARCH_CLASSES.INPUT_WRAPPER}>
        <input
          type="search"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={onFocus}
          onBlur={onBlur}
          className={SEARCH_CLASSES.INPUT}
          name="q"
          aria-label="Search products"
          aria-expanded={isFocused}
          role="searchbox"
          autoComplete="off"
        />
        <SearchIcon />
      </div>

      {isFocused && (
        <button
          onClick={onBlur}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-white hover:text-black ml-4"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
