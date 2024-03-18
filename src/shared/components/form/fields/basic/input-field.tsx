import type { InputProps } from '@/shared/components/input/types';
import type { RegisterOptions } from 'react-hook-form';
import type { FC } from 'react';
import { Field } from '@/shared/components/form/field';
import { Input } from '@/shared/components/input/input';
import { FieldWithError } from '@/shared/components/form/field-with-error';

interface InputFieldProps extends Omit<InputProps, 'required'> {
  rules?: RegisterOptions;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  type,
  rules,
  placeholder,
  id,
  label,
  value,
  disabled,
}) => (
  <Field name={name} rules={rules}>
    {props => (
      <FieldWithError name={name}>
        <Input
          {...props}
          placeholder={placeholder}
          label={label}
          type={type}
          disabled={disabled}
          value={value}
          id={id}
        />
      </FieldWithError>
    )}
  </Field>
);
