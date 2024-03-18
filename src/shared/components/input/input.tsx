import { forwardRef } from 'react';
import type { InputProps } from '@/shared/components/input/types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      id,
      type = 'text',
      label,
      required,
      value,
      placeholder,
      name,
      onChange,
      onBlur,
      onFocus,
    },
    ref
  ) => (
    <input
      ref={ref}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  )
);
