import React, {forwardRef} from 'react';

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel: string;
  isToggle?: boolean;
  isExpanded?: boolean;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({children, ariaLabel, isToggle, isExpanded, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className="w-12 h-12 flex items-center justify-center"
        aria-label={ariaLabel}
        role={isToggle ? 'button' : undefined}
        aria-expanded={isToggle ? isExpanded : undefined}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ActionButton.displayName = 'ActionButton';

export default ActionButton;
