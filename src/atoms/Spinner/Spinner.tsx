import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface SpinnerBaseProps extends BoxProps {
  stroke?: string;
}

const SpinnerBase = styled(Box)<SpinnerBaseProps>`
  display: inline-block;
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 10rem;
  overflow: hidden;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    border-color: currentColor transparent transparent transparent;
    border-radius: 10rem;
    border-style: solid;
    border-width: ${({ stroke }) => stroke};
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

interface SpinnerProps extends SpinnerBaseProps {}

export const Spinner: FC<SpinnerProps> = props => (
  <SpinnerBase stroke="0.3rem" {...props}>
    <div />
    <div />
    <div />
    <div />
  </SpinnerBase>
);
