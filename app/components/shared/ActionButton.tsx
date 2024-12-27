import React, {forwardRef} from 'react';

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel?: string;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({children, ariaLabel, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className="w-12 h-12 flex items-center justify-center"
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ActionButton.displayName = 'ActionButton';

export default ActionButton;
