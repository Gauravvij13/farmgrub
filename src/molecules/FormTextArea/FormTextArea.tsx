import React, { FC } from 'react';
import { useField } from 'formik';
import { TextAreaField, TextAreaFieldProps } from 'molecules/TextAreaField';
import { LocaleString } from 'locales';

export interface FormInputProps extends TextAreaFieldProps {
  label: LocaleString;
  name: string;
}

export const FormTextArea: FC<FormInputProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  return <TextAreaField {...field} label={label} {...props} error={error as LocaleString} />;
};
