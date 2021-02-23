import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Box } from 'atoms/Box';
import { variant } from 'styled-system';
import { Input, InputBaseProps } from 'atoms/Input';
import { Label } from 'atoms/Label';
import { Error } from 'atoms/Error';
import { Warning } from 'atoms/Warning';
import { LocaleString } from 'locales';

type Variant = 'primary';
export interface InputFieldBaseProps extends InputBaseProps {
  variant?: Variant;
  labelPosition?: Record<string, string>;
}
export const InputFieldBase = styled(Box)<InputFieldBaseProps>`
  ${variant({
    variants: {
      primary: {
        width: '100%',
        h2: {
          transition: 'all 1s',
        },
        '&:active, &:hover, &:focus': {
          h2: {
            transform: 'translateY(-15px)',
            fontSize: '12px',
          },
        },
      },
      secondary: {
        position: 'relative',
        marginBottom: '2',
      },
    },
  })}
`;

export interface InputFieldProps extends InputFieldBaseProps {
  label?: LocaleString;
  autoFocus?: boolean;
  name?: string;
  error?: LocaleString | string;
  warning?: LocaleString;
  type?: string;
}
export const InputField: FC<InputFieldProps> = ({
  label,
  autoFocus,
  labelPosition,
  error,
  warning,
  variant: internalVariant,
  value,
  inputMode,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autoFocus === true && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <InputFieldBase variant={internalVariant} height="54px">
      <Input
        value={value}
        ref={inputRef}
        variant={!error ? 'secondary' : 'error'}
        pl={{ xs: 7 }}
        placeholder=" "
        height="100%"
        position="relative"
        inputMode={inputMode}
        {...props}
      />
      {label && (
        <Label
          as="p"
          id={label}
          position="absolute"
          top={{ xs: 10 }}
          labelPosition={labelPosition}
          fontSize={{ xs: 11 }}
        />
      )}
      {error && <Error text={error as LocaleString} />}
      {warning && <Warning text={warning as LocaleString} />}
    </InputFieldBase>
  );
};

InputField.defaultProps = {
  variant: 'primary',
};
