import React from 'react';

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel?: string;
}

function ActionButton({children, ariaLabel, ...props}: ActionButtonProps) {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center"
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

export default ActionButton;
