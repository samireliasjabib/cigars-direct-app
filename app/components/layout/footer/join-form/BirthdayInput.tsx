import React, {ChangeEvent, useState} from 'react';
import {cn} from '~/lib/utils';

interface BirthdayInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const BirthdayInput: React.FC<BirthdayInputProps> = ({
  value,
  onChange,
  className,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove any non-numeric characters
    input = input.replace(/\D/g, '');

    // Format as MM/DD/YYYY
    if (input.length > 0) {
      const parts: string[] = [];

      // Add month
      if (input.length >= 2) {
        const month = parseInt(input.slice(0, 2));
        if (month > 12) {
          parts.push('12');
          input = '12' + input.slice(2);
        } else {
          parts.push(input.slice(0, 2));
        }
      } else {
        parts.push(input);
      }

      // Add day
      if (input.length >= 4) {
        const day = parseInt(input.slice(2, 4));
        if (day > 31) {
          parts.push('31');
          input = input.slice(0, 2) + '31' + input.slice(4);
        } else {
          parts.push(input.slice(2, 4));
        }
      } else if (input.length > 2) {
        parts.push(input.slice(2));
      }

      // Add year
      if (input.length > 4) {
        parts.push(input.slice(4, 8));
      }

      input = parts.join('/');
    }

    // Limit to MM/DD/YYYY format
    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    onChange(input);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Birthday"
        className={cn(
          'w-full px-4 py-2 text-black placeholder:text-black/60 bg-white border rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-colors',
          className,
        )}
        maxLength={10}
      />
    </div>
  );
};

export default BirthdayInput;
