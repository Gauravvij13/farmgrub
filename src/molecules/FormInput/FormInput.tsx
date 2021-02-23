import React, { FC } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';

export interface FormInputProps extends InputFieldProps {
  name: string;
}

export const FormInput: FC<FormInputProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  return <InputField {...field} {...props} error={error as LocaleString} />;
};
