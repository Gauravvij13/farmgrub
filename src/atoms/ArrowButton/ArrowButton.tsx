import React from 'react';
import { Flex } from 'atoms/Flex';
import { BoxProps } from 'atoms/Box';
import { Icon, icons } from 'molecules/Icon';
import styled from 'styled-components';

interface ArrowButtonProps extends BoxProps {
  name: keyof typeof icons;
  height: string;
  width: string;
}

const FlexStyle = styled(Flex)<ArrowButtonProps>`
  &:hover,
  &:focus {
    box-shadow: 1px 1px 5px #4a4a48;
  }
`;

export const ArrowButton = ({ onClick, name, height, width, ...props }: ArrowButtonProps) => {
  return (
    <FlexStyle
      height={height}
      width={width}
      bg="offwhite.0"
      borderRadius="3rem"
      boxShadow="1px 1px 3px #7c7b79"
      onClick={onClick}
      position="absolute"
      zIndex={1}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      {...props}
    >
      <Icon name={name} height={3} width={3} fill="offwhite.1000" />
    </FlexStyle>
  );
};
