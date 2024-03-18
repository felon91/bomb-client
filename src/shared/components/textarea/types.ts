import type { ChangeEventHandler, FocusEventHandler } from 'react';

export interface TextAreaProps {
  disabled?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  rows?: number;
}
