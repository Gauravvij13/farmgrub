import React from 'react';
// import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { Providers } from '../App';

const ThemeDecorator = (storyFn: any) => (
  <Providers>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </Providers>
);

export default ThemeDecorator;
