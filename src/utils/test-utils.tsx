// test-utils.js
import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react';
import { theme } from 'styles';
import { en } from 'locales';
import Proptypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

export const MainProviders = ({ children }: { children: any }) => {
  return (
    <IntlProvider locale="en" messages={en}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IntlProvider>
  );
};
MainProviders.propTypes = {
  children: Proptypes.element.isRequired,
};
const customRender = (ui: any, options?: any) => render(ui, { wrapper: MainProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { fireEvent };
export { act };
export { wait };
