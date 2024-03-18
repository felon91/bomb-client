import { FormOrderLabel } from '@/modules/cart/components/form-order/form-order.syled';
import type { FC } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { FormTextAreaWrapper } from '@/modules/cart/components/form-textarea/form-textarea.syled';
import { TextAreaField } from '@/shared/components/form/fields/basic/textarea-field';

interface FormTextAreaProps {
  name: string;
  label: string;
  id: string;
  rules?: RegisterOptions;
}

export const FormTextArea: FC<FormTextAreaProps> = ({ name, label, id, rules }) => (
  <FormTextAreaWrapper>
    <FormOrderLabel htmlFor={id}>{label}</FormOrderLabel>
    <TextAreaField id={id} name={name} placeholder={label} rules={rules} />
  </FormTextAreaWrapper>
);
