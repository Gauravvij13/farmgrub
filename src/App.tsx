import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import AppRouter from 'components/AppRouter';
import { theme } from 'styles';
import { en } from 'locales';
import { composeComponents } from 'utils/component';
import AuthGate from 'pages/auth/AuthGate';
import GlobalStyle from 'styles/global';
import { AuthProvider } from 'contexts/Authentication';

import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from 'templates/AppWrapper';
import { GuestProvider } from 'organisms/GuestLoginModal/contexts/GuestContext';
import { Meta } from './atoms/Meta';

if (
  process.env.REACT_APP_TARGET_NAME === 'production' ||
  process.env.REACT_APP_TARGET_NAME === 'staging'
) {
  import(/* webpackChunkName: "AnalyticsService" */ 'utils/analytics').then(
    ({ initialize, fbPixelInit }) => {
      initialize();
      fbPixelInit();
    },
  );
}

export const Providers = composeComponents(
  <ThemeProvider theme={theme} />,
  <IntlProvider locale="en" messages={en} />,
  AppRouter,
  AuthProvider,
  GuestProvider,
);

const App: React.FC = () => {
  return (
    <Providers>
      <AppWrapper>
        <Meta />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <ToastContainer hideProgressBar toastClassName="general-toast" />

        <GlobalStyle />
        <AuthGate />
      </AppWrapper>
    </Providers>
  );
};

export default App;
