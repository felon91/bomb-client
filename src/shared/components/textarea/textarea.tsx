import { forwardRef } from 'react';
import type { TextAreaProps } from '@/shared/components/textarea/types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { disabled, id, label, required, value, placeholder, name, onChange, onBlur, onFocus, rows },
    ref
  ) => (
    <textarea
      ref={ref}
      rows={rows}
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
