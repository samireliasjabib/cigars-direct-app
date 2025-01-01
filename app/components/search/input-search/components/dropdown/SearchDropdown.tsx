import {SEARCH_CLASSES, SEARCH_CONSTANTS} from '../../constants/constants';

interface SearchDropdownProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const SearchDropdown = ({isVisible, children}: SearchDropdownProps) => (
  <div
    className={`
      ${SEARCH_CLASSES.DROPDOWN_BASE}
      transform transition-all duration-200 ease-in-out origin-top
      ${
        isVisible
          ? 'opacity-100 translate-y-2 scale-100'
          : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
      }
      z-${SEARCH_CONSTANTS.Z_INDICES.DROPDOWN}
    `}
    role="listbox"
    aria-hidden={!isVisible}
  >
    <div>{children}</div>
  </div>
);

export default SearchDropdown;
