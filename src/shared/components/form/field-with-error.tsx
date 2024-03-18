import type { FC, PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { getErrorForm } from '@/shared/utils/get-error-form';
import { Error } from '@/shared/components/form/error.styled';

export interface FieldWithErrorProps {
  name: string;
}

export const FieldWithError: FC<PropsWithChildren<FieldWithErrorProps>> = ({ name, children }) => {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorForm<string>(errors, `${name}.message`);

  return (
    <>
      {children}
      {errorMessage && <Error>{errorMessage}</Error>}
    </>
  );
};
