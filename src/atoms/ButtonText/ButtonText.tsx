import React, { FC } from 'react';
import { Text } from 'atoms/Text';
import styled from 'styled-components';
import { LocaleString } from 'locales';
import { Box, BoxProps } from 'atoms/Box';

export interface ButtonTextBaseProps extends BoxProps {
  type?: 'button' | 'submit';
  title: LocaleString;
  loading?: boolean;
  onClick?(e: any): void;
}

const ButtonTextBase = styled(Box)<ButtonTextBaseProps>`
  position: relative;
  display: grid;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0px;
`;
interface ButtonTextProps extends ButtonTextBaseProps {}

export const ButtonText: FC<ButtonTextProps> = ({ title, ...props }) => {
  return (
    <ButtonTextBase {...props}>
      <Text variant="field" color="dirtyblue.500" fontWeight="bold" id={title} />{' '}
    </ButtonTextBase>
  );
};

ButtonText.defaultProps = {
  as: 'button',
};
