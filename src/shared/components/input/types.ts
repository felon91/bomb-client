import type { HTMLInputTypeAttribute, ChangeEventHandler, FocusEventHandler } from 'react';

export interface InputProps {
  disabled?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
