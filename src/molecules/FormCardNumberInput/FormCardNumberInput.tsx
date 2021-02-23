import React, { FC, useMemo, useCallback } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';
import { handleCursor } from 'utils/cursorHandler';
import { InputEvent } from 'typings/syntheticEvents';

export interface FormCardNumberInputProps extends InputFieldProps {
  label: LocaleString;
  name: string;
}

export const FormCardNumberInput: FC<FormCardNumberInputProps> = ({ label, name, ...props }) => {
  const [{ value, onChange, ...field }, meta] = useField(name);
  const error = meta.touched && meta.error;

  const handleChange = useCallback(
    (e: InputEvent) => {
      handleCursor(e);
      const event = {
        ...e,
      };
      event.target.value = e.currentTarget.value.replace(/([^\d])/g, ''); // remove spaces from card number
      onChange(event);
    },
    [onChange],
  );

  const formatValue = useMemo(() => {
    if (value) {
      const str = value.replace(/([^\d])/g, '');
      if (str.length <= 4) {
        return str;
      }
      if (str.length <= 8) {
        return `${str.slice(0, 4)} ${str.slice(4)}`;
      }
      if (str.length <= 12) {
        return `${str.slice(0, 4)} ${str.slice(4, 8)} ${str.slice(8)}`;
      }
      if (str.length <= 16) {
        return `${str.slice(0, 4)} ${str.slice(4, 8)} ${str.slice(8, 12)} ${str.slice(12)}`;
      }
      if (str.length <= 19) {
        return `${str.slice(0, 4)} ${str.slice(4, 8)} ${str.slice(8, 12)} ${str.slice(
          12,
          16,
        )} ${str.slice(16)}`;
      }
    }
    return '';
  }, [value]);

  return (
    <InputField
      {...field}
      label={label}
      {...props}
      error={error as LocaleString}
      onChange={handleChange}
      value={formatValue}
      maxLength="23"
      type="text"
    />
  );
};
