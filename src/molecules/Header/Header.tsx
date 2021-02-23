import React from 'react';
import { Box, BoxProps } from 'atoms/Box';
import styled, { keyframes, css } from 'styled-components';
import { Heading } from 'atoms/Heading';
import { Subheading } from 'atoms/Subheading';
import { LocaleString } from 'locales';

export type HeaderProps = {
  heading?: LocaleString;
  headingValues?: Record<string, any>;
  subheading?: LocaleString;
  containerProps?: BoxProps;
  animate?: boolean;
};

const pulse = keyframes`
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;
const animation = (props: any) =>
  css`
    ${pulse} ${props.animationLength} ease-in;
  `;

const Container = styled(Box)<HeaderProps>`
  ${({ animate }) =>
    animate &&
    css`
      animation: ${animation};
    `}
`;
export const Header = ({
  heading,
  subheading,
  headingValues,
  containerProps,
  animate,
}: HeaderProps) => {
  return (
    <Container textAlign="center" {...containerProps} animationLength="300ms" animate={animate}>
      <Box mb={3}>
        <Heading text={heading} values={headingValues} />
      </Box>
      <Subheading text={subheading} />
    </Container>
  );
};
