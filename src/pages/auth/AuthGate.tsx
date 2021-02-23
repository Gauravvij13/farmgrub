import React, { useEffect, useCallback } from 'react';
import { UnauthenticatedRoutes, AuthenticatedRoutes } from 'Routes';
import SplashScreen from 'pages/auth/molecules/splash/SplashScreen';
import Div100vh from 'react-div-100vh';
import { GuestLoginModal } from 'organisms/GuestLoginModal';
import useAuth from 'contexts/Authentication';

import { WelcomeMessage } from './atoms/WelcomeMessage';

export default function AuthGate() {
  const {
    actions: { retrieveUserInfo },
    state: { authenticating, isLoggedIn },
  } = useAuth();

  const getAuthSession = useCallback(() => {
    retrieveUserInfo();
  }, [retrieveUserInfo]);

  useEffect(() => {
    getAuthSession();
  }, [getAuthSession]);

  if (authenticating) {
    return (
      <Div100vh>
        <SplashScreen>
          <WelcomeMessage />
        </SplashScreen>
      </Div100vh>
    );
  }

  return (
    <>
      {isLoggedIn ? (
        <AuthenticatedRoutes />
      ) : (
        <>
          <UnauthenticatedRoutes />
          <GuestLoginModal />
        </>
      )}
    </>
  );
}
