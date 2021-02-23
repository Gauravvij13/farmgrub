import React, { forwardRef, ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, BoxProps } from 'atoms/Box';

type Variant = 'primary' | 'secondary' | 'error';
export interface TextAreaBaseProps extends BoxProps {
  placeholder?: string;
  variant?: Variant;
  onChange?(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
  maxLength?: string;
  value?: string | null;
  rows?: string;
}
export const TextAreaBase = styled(Box)<TextAreaBaseProps>`
  width: 100%;
  max-width: 100%;
  font-family: 'roboto';
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

export const TextArea = forwardRef<ReactElement | HTMLElement, TextAreaBaseProps>(
  ({ placeholder, as, onChange, rows, maxLength, value, ...props }, ref) => {
    return (
      <TextAreaBase
        as={as}
        ref={ref}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        borderBottom="1px solid"
        px={{ xs: 5 }}
        pt={{ xs: 5 }}
        border={0}
        data-gramm="false"
        contenteditable="true"
        {...props}
      />
    );
  },
);

TextArea.defaultProps = {
  as: 'textarea',
  fontSize: '1.6rem',
};
