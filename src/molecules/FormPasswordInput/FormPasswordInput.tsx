import React, { FC } from 'react';
import { useField } from 'formik';
import { PasswordInputField, PasswordInputFieldProps } from 'molecules/PasswordInputField';
import { LocaleString } from 'locales';

export interface FormPasswordInputProps extends PasswordInputFieldProps {
  label: LocaleString;
  name: string;
}

export const FormPasswordInput: FC<FormPasswordInputProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  return <PasswordInputField {...field} label={label} {...props} error={error as LocaleString} />;
};
