import type { RegisterOptions } from 'react-hook-form';
import type { FC } from 'react';
import { Field } from '@/shared/components/form/field';
import { FieldWithError } from '@/shared/components/form/field-with-error';
import type { TextAreaProps } from '@/shared/components/textarea/types';
import { TextArea } from '@/shared/components/textarea/textarea';

interface TextAreaFieldProps extends Omit<TextAreaProps, 'required'> {
  rules?: RegisterOptions;
}

export const TextAreaField: FC<TextAreaFieldProps> = ({
  name,
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
        <TextArea
          {...props}
          placeholder={placeholder}
          label={label}
          disabled={disabled}
          value={value}
          id={id}
        />
      </FieldWithError>
    )}
  </Field>
);
