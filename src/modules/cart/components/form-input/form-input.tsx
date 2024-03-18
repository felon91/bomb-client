import { FormOrderLabel } from '@/modules/cart/components/form-order/form-order.syled';
import { InputField } from '@/shared/components/form/fields/basic/input-field';
import type { FC, HTMLInputTypeAttribute } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { FormInputWrapper } from '@/modules/cart/components/form-input/form-input.syled';

interface FormInputProps {
  name: string;
  label: string;
  id: string;
  rules?: RegisterOptions;
  type?: HTMLInputTypeAttribute;
}

export const FormInput: FC<FormInputProps> = ({ name, label, id, rules, type }) => (
  <FormInputWrapper>
    <FormOrderLabel htmlFor={id}>{label}</FormOrderLabel>
    <InputField id={id} name={name} placeholder={label} rules={rules} type={type} />
  </FormInputWrapper>
);
