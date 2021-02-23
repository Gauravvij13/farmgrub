import React, { FC, ReactNode } from 'react';
import { Grid } from 'atoms/Grid';
import { BackButton } from 'atoms/BackButton';
import { Box, BoxProps } from 'atoms/Box';
import styled from 'styled-components';

type WithBackButtonProps = {
  children?: ReactNode;
  left?: string;
  top?: string;
  hideBackButton?: boolean;
};

const Wrapper = styled(Box)<BoxProps>`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WithBackButton: FC<WithBackButtonProps> = ({
  children,
  left,
  top,
  hideBackButton,
}) => {
  if (hideBackButton) {
    return <Wrapper>{children}</Wrapper>;
  }

  return (
    <Grid minHeight="100vh">
      <BackButton left={left} top={top} />
      <Wrapper>{children || null}</Wrapper>
    </Grid>
  );
};
