import type {
  DefaultValues,
  FieldValues,
  Mode,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import type { PropsWithChildren } from 'react';
import { toast } from 'react-toastify';

interface FormProps<TFormValues extends FieldValues> {
  defaultValues?: DefaultValues<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  mode?: Mode;
  reValidateMode?: UseFormProps['reValidateMode'];
  shouldUnregister?: boolean;
  shouldFocusError?: boolean;
  showNotifyOnError?: boolean;
}

export const Form = <TFormValues extends FieldValues>({
  children,
  defaultValues,
  onSubmit,
  mode = 'onTouched',
  reValidateMode = 'onBlur',
  shouldFocusError,
  shouldUnregister,
  showNotifyOnError,
}: PropsWithChildren<FormProps<TFormValues>>) => {
  const methods = useForm<TFormValues>({
    mode,
    reValidateMode,
    defaultValues,
    shouldUnregister,
    shouldFocusError,
  });

  const handleSubmitForm = methods.handleSubmit(async (data, event) => {
    const result = await onSubmit(data, event);

    if (result === false && showNotifyOnError) {
      toast.error('Произошла ошибка, попробуйте еще раз');
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmitForm}>{children}</form>
    </FormProvider>
  );
};
