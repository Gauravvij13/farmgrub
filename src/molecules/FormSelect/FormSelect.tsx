import React, { FC } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';

export interface FormSelectProps extends InputFieldProps {
  label: LocaleString;
  name: string;
}

export const FormSelect: FC<FormSelectProps> = ({ label, name, children, ...props }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  return (
    <InputField {...field} label={label} {...props} as="select" error={error as LocaleString}>
      {children}
    </InputField>
  );
};
