import React, { FC, useMemo, useCallback } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';
import { handleCursor } from 'utils/cursorHandler';
import { InputEvent } from 'typings/syntheticEvents';

export interface FormExpiryDateInputProps extends InputFieldProps {
  label: LocaleString;
  name: string;
}

export const FormExpiryDateInput: FC<FormExpiryDateInputProps> = ({ label, name, ...props }) => {
  const [{ value, onChange, ...field }, meta] = useField(name);
  const error = meta.touched && meta.error;

  const handleChange = useCallback(
    (e: InputEvent) => {
      handleCursor(e);
      const event = {
        ...e,
      };
      event.target.value = e.currentTarget.value.replace(/([^\d])/g, ''); // remove `/` from expiry date
      onChange(event);
    },
    [onChange],
  );

  const formatValue = useMemo(() => {
    if (value) {
      const str = value.replace(/([^\d])/g, '');
      if (str.length <= 2) {
        return str;
      }
      if (str.length <= 4) {
        return `${str.slice(0, 2)}/${str.slice(2)}`;
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
      maxLength="5"
      type="text"
    />
  );
};
