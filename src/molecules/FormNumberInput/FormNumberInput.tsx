import React, { FC } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';

export interface FormNumberInputProps extends InputFieldProps {
  label: LocaleString;
  name: string;
  error?: string;
}

export const FormNumberInput: FC<FormNumberInputProps> = ({ label, error, name, ...props }) => {
  const [field, meta] = useField(name);
  const interlError = (meta.touched && meta.error) || error;

  return (
    <InputField
      {...field}
      label={label}
      {...props}
      error={interlError as LocaleString}
      maxLength="14"
    />
  );
};
