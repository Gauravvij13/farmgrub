import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Box } from 'atoms/Box';
import { variant } from 'styled-system';
import { TextArea, TextAreaBaseProps } from 'atoms/TextArea';
import { Label } from 'atoms/Label';
import { Error } from 'atoms/Error';
import { Warning } from 'atoms/Warning';
import { LocaleString } from 'locales';

type Variant = 'primary';
export interface TextAreaFieldBaseProps extends TextAreaBaseProps {
  variant?: Variant;
  left?: string;
  right?: string;
}
export const TextAreaFieldBase = styled(Box)<TextAreaFieldBaseProps>`
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

export interface TextAreaFieldProps extends TextAreaFieldBaseProps {
  label: LocaleString;
  autoFocus?: boolean;
  name?: string;
  error?: LocaleString | string;
  warning?: LocaleString;
  type?: string;
  value?: string | null;
  labelProps?: Record<string, string | number>;
}
export const TextAreaField: FC<TextAreaFieldProps> = ({
  label,
  autoFocus,
  labelProps,
  error,
  warning,
  variant: internalVariant,
  value,
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (autoFocus === true && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <TextAreaFieldBase variant={internalVariant}>
      <TextArea
        value={value}
        ref={inputRef}
        variant={!error ? 'secondary' : 'error'}
        pl={{ xs: 7 }}
        pt={{ xs: '2rem' }}
        placeholder=" "
        height="100%"
        position="relative"
        {...props}
      />
      <Label
        as="p"
        id={label}
        position="absolute"
        top={{ xs: 10 }}
        left={labelProps?.left}
        right={labelProps?.right}
        fontSize={{ xs: 11 }}
      />
      {error && <Error text={error as LocaleString} />}
      {warning && <Warning text={warning as LocaleString} />}
    </TextAreaFieldBase>
  );
};

TextAreaField.defaultProps = {
  variant: 'primary',
  rows: '5',
  labelProps: { left: '1rem', right: 0 },
};
