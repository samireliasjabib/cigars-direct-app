import {SEARCH_CLASSES, SEARCH_CONSTANTS} from '../../constants/constants';

interface SearchModalProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export const SearchModal = ({isVisible, children}: SearchModalProps) => (
  <div
    className={`
      ${SEARCH_CLASSES.MODAL_BASE}
      transform transition-all duration-200 ease-out origin-top
      ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-98 pointer-events-none'
      }
      z-${SEARCH_CONSTANTS.Z_INDICES.MODAL}
      top-[${SEARCH_CONSTANTS.HEADER_HEIGHT}px]
    `}
    role="dialog"
    aria-modal="true"
    aria-hidden={!isVisible}
  >
    <div
      className={`
        ${SEARCH_CLASSES.CONTAINER}
        transform transition-all duration-200 delay-75
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div className="w-full">{children}</div>
    </div>
  </div>
);
