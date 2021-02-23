import React, { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from 'atoms/Box';
import { variant } from 'styled-system';

export interface ButtonBaseProps extends BoxProps {
  variant?: 'primary' | 'secondary' | 'default' | 'disabled' | 'transparent';
  size?: 'small';
  disabled?: boolean;
  type?: 'button' | 'submit';
}
const ButtonBase = styled(Box)<ButtonBaseProps>`
  position: relative;
  display: grid;
  cursor: pointer;
  outline: none;

  ${variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'secondary.500',
        borderRadius: '50px',
        width: '100%',
        height: '5.4rem',
        transition: 'all 0.3s',
        border: '0',
        cursor: 'pointer',
        '&:hover': {
          bg: 'secondary.600',
          border: '0',
        },
        '&:active': {
          bg: 'secondary.600',

          border: '0',
          transform: 'scale(0.98)',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      secondary: {
        color: 'secondary.500',
        bg: 'white',
        borderRadius: '50px',
        width: '100%',
        height: '5.4rem',
        border: '1px solid ',
        transition: 'all 0.2s',
        borderColor: 'primary.500',
        cursor: 'pointer',
        '&:hover': {},
        '&:active': {
          transform: 'scale(0.98)',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      default: {
        color: 'white',
        bg: 'transparent',
        borderRadius: '50px',
        width: '100%',
        height: '5.4rem',
        transition: 'all 0.3s',
        border: '1px solid white',
        cursor: 'pointer',
        '&:hover': {
          bg: 'white',
          color: 'applegreen.500',
          border: '1px solid white',
        },
        '&:active': {
          bg: 'white',
          color: 'applegreen.500',
          border: '1px solid white',
          transform: 'scale(0.98)',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      disabled: {
        color: 'silver.500',
        bg: 'pale.500',
        borderRadius: '50px',
        width: '100%',
        height: '5.4rem',
        border: '0',
        cursor: 'pointer',
        '&:hover': {
          border: '0',
        },
        '&:active': {
          border: '0',
          transform: 'scale(0.98)',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      transparent: {
        color: 'applegreen.500',
        bg: 'transparent',
        borderRadius: '50px',
        width: '100%',
        border: '0',
        cursor: 'pointer',
        '&:hover': {
          border: '0',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
  })}

  ${variant({
    prop: 'size',
    variants: {
      small: {
        height: '4rem',
        p: {
          margin: 0,
        },
      },
    },
  })}
`;
interface ButtonProps extends ButtonBaseProps {}

export const Button: FC<ButtonProps> = props => {
  return <ButtonBase {...props} />;
};

Button.defaultProps = {
  as: 'button',
};
