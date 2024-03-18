import type { FC, ReactNode } from 'react';
import type { FieldErrors, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

export interface FieldProps {
  children: ({
    onChange,
    onBlur,
    ref,
    name,
  }: UseFormRegisterReturn & { errors: FieldErrors }) => ReactNode;
  name: string;
  rules?: RegisterOptions;
}

export const Field: FC<FieldProps> = ({ children, rules, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ref, onChange, onBlur } = register(name, rules);

  return <>{children({ ref, onChange, onBlur, name, errors })}</>;
};
