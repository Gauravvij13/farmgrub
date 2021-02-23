import React, { forwardRef, ReactElement, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from 'atoms/Box';
import mergeRefs from 'utils/mergeRefs';
import { Merge } from 'typings/utils';

type Variant = 'primary' | 'secondary' | 'error';
export interface InputBaseProps
  extends Merge<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    BoxProps
  > {
  placeholder?: string;
  variant?: Variant;
  onChange?: any;
  maxLength?: any;
  value?: any;
  autoFocus?: boolean;
  defaultValue?: string;
}
export const InputBase = styled(Box)<InputBaseProps>`
  width: 100%;
  ${variant({
    variants: {
      primary: {
        bg: 'pale.500',
        borderColor: 'steelgrey.500',
        outline: 'none',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        '&:focus, &:active': {
          bg: 'offwhite.500',
          borderBottom: '2px solid',
          borderColor: 'tertiary.500',
        },
      },
      secondary: {
        display: 'block',
        backgroundColor: 'pale.500',
        border: 'none',
        borderBottom: '1px solid',
        borderColor: 'steelgrey.500',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        '&:focus, &:not(:placeholder-shown)': {
          outline: 'none',
          borderBottom: '2px solid ',
          borderColor: 'darklavender.500',
          backgroundColor: 'offwhite.500',
          '+p': {
            top: '-12px',
            fontSize: '12px',
            color: 'darklavender.500',
          },
        },
      },
      error: {
        display: 'block',
        color: 'darkorange.500',
        backgroundColor: 'pale.500',
        border: 'none',
        borderBottom: '1px solid',
        borderColor: 'steelgrey.500',
        '&:focus, &:not(:placeholder-shown)': {
          outline: 'none',
          borderBottom: '1px solid ',
          borderColor: 'darkorange.500',
          backgroundColor: 'offwhite.500',
          '+p': {
            top: '-12px',
            fontSize: '12px',
            color: 'darklavender.500',
          },
        },
      },
    },
  })};
`;

export const Input = forwardRef<ReactElement | HTMLElement, InputBaseProps>(
  ({ placeholder, as, onChange, maxLength, value, autoFocus, inputMode, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus === true && inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    return (
      <InputBase
        as={as}
        ref={mergeRefs(ref, inputRef)}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        inputMode={inputMode}
        borderBottom="1px solid"
        pt={{ xs: 5 }}
        border={0}
        {...props}
      />
    );
  },
);

Input.defaultProps = {
  as: 'input',
  fontSize: '1.6rem',
  pl: '1rem',
  pr: '1rem',
};
