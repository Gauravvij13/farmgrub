/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { LogoImage } from 'pages/auth/atoms/LogoImage';

interface SplashScreenProps extends BoxProps {
  children?: any;
  gridTemplateRows?: string;
}
const Container = styled(Box)<SplashScreenProps>`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: radial-gradient(
    ${props => props.theme.colors.lightblue[0]},
    ${props => props.theme.colors.lightblue[6]}
  );
`;

const SplashScreen = ({ children, gridTemplateRows }: SplashScreenProps) => {
  return (
    <Container width="100%">
      <Grid
        justifyContent="center"
        gridTemplateRows={gridTemplateRows}
        height="100%"
        gridGap="28px"
      >
        <LogoImage />
        {children}
      </Grid>
    </Container>
  );
};

export default SplashScreen;
