import React, { FC } from 'react';
import styled from 'styled-components';
import { Scale } from 'atoms/Scale';
import { Text } from 'atoms/Text';
import { Box, BoxProps } from 'atoms/Box';
import { variant } from 'styled-system';

export interface ChipBaseProps extends BoxProps {
  variant?: 'primary' | 'selected';
}
const ChipBase = styled(Box)<ChipBaseProps>`
  outline: none;
  cursor: pointer;
  ${variant({
    variants: {
      primary: {
        color: 'dirtyblue.500',
        bg: 'white',
        width: '100%',
        border: '1px solid ',
        borderColor: 'lightblue.500',
      },
      selected: {
        color: 'white',
        bg: 'lightblue.600',
        width: '100%',
        border: '1px solid ',
        borderColor: 'lightblue.500',
      },
    },
  })}
`;
interface ChipProps extends ChipBaseProps {
  text: string;
}

export const Chip: FC<ChipProps> = ({ text, ...props }) => {
  return (
    <Scale>
      <ChipBase py=".7rem" borderRadius="3rem" type="button" {...props}>
        <Text as="h3" variant="body" fontWeight="500">
          {text}
        </Text>
      </ChipBase>
    </Scale>
  );
};

Chip.defaultProps = {
  as: 'button',
};
