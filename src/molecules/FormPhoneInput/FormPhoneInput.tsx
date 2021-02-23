import React, { FC, useMemo, useCallback } from 'react';
import { useField } from 'formik';
import { InputField, InputFieldProps } from 'molecules/InputField';
import { LocaleString } from 'locales';
import { handleCursor } from 'utils/cursorHandler';
import { InputEvent } from 'typings/syntheticEvents';

export interface FormPhoneInputProps extends InputFieldProps {
  label: LocaleString;
  name: string;
}

export const FormPhoneInput: FC<FormPhoneInputProps> = ({ label, name, ...props }) => {
  const [{ value, onChange, ...field }, meta] = useField(name);
  const error = meta.touched && meta.error;

  const handleChange = useCallback(
    (e: InputEvent) => {
      handleCursor(e);
      const event = {
        ...e,
      };
      event.target.value = e.currentTarget.value.replace(/([^\d])/g, ''); // remove `(,), -` and extra space from phone no.
      onChange(event);
    },
    [onChange],
  );
  const formatValue = useMemo(() => {
    if (value) {
      const str = value.replace(/([^\d])/g, '');
      if (str.length <= 3) {
        return `(${str.slice(0, 3)}`;
      }
      if (str.length <= 6) {
        return `(${str.slice(0, 3)}) ${str.slice(3, 6)}${str.slice(6)}`;
      }
      if (str.length <= 14) {
        return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}${str.slice(10)}`;
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
      type="tel"
      inputMode="tel"
      onChange={handleChange}
      value={formatValue}
      maxLength="14"
    />
  );
};
