import React, { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from 'atoms/Box';
import { variant } from 'styled-system';
import css from '@styled-system/css';

export interface TabBaseProps extends BoxProps {
  variant?: 'selected';
  type?: 'button' | 'submit';
}
const selected = css({
  color: 'white',
  bg: 'secondary.500',
  '&:hover': {
    bg: 'darklavender.500',
    border: '0',
  },
  '&:active': {
    bg: 'darklavender.500',
    border: '0',
  },
  '&:focus': {
    outline: 'none',
  },
});
const TabBase = styled(Box)<TabBaseProps>`
  outline: none;
  min-height: '4rem';
  cursor: pointer;
  ${selected}
  ${variant({
    variants: {
      selected: {
        bg: 'darklavender.500',
        border: '0',
      },
    },
  })};
`;
interface TabProps extends TabBaseProps {}

export const Tab: FC<TabProps> = ({ ...props }) => {
  return <TabBase border={0} width="100%" cursor="pointer" {...props} />;
};

Tab.defaultProps = {
  as: 'button',
};
