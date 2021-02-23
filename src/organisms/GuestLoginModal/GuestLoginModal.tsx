import React, { useCallback, useEffect } from 'react';
import { Box } from 'atoms/Box';
import { useSpring } from 'react-spring';

import { useLocation } from 'react-router-dom';
import { AnimatedMenu } from 'atoms/AnimatedMenu';
import useGuest from './contexts/GuestContext';

import { GuestZipCode } from './molecules/GuestZipCode';
import { GuestNoDelivery } from './molecules/GuestNoDelivery';
import { GuestSignup } from './molecules/GuestSignup';
import { GuestSignin } from './molecules/GuestSignin';

export const GuestLoginModal = () => {
  const location = useLocation();
  const {
    state: { guestRoute, loginWarningModalState },
    actions: { setLoginWarningState, setGuestRoute },
  } = useGuest();

  const styles = useSpring({
    transform: loginWarningModalState ? 'translateX(0)' : 'translateX(200%)',
    opacity: loginWarningModalState ? 1 : 0,
  });

  const closeModal = useCallback(() => {
    setLoginWarningState(false);
  }, [setLoginWarningState]);

  useEffect(() => {
    if (location.pathname === '/terms-of-services' || location.pathname === '/forgot-password') {
      closeModal();
    }
  }, [location, closeModal, setGuestRoute]);

  const renderContent = useCallback(() => {
    switch (guestRoute) {
      case 'zipcode':
        return <GuestZipCode />;
      case 'nodelivery':
        return <GuestNoDelivery />;
      case 'signup':
        return <GuestSignup />;
      case 'signin':
        return <GuestSignin />;
      default:
        return <GuestZipCode />;
    }
  }, [guestRoute]);

  return (
    <AnimatedMenu styles={styles!}>
      <Box
        backgroundColor="white"
        height="100vh"
        position="absolute"
        top="0"
        pt="2rem"
        right="0"
        width={{ xs: '100%', md: '40%' }}
        boxShadow="-5px 0 5px -5px #aaa"
      >
        <Box padding="40px 30px" maxHeight="100vh" overflowY="auto">
          <Box
            cursor="pointer"
            padding="10px"
            position="absolute"
            right="5px"
            top="0"
            fontSize="5rem"
            onClick={closeModal}
          >
            ×
          </Box>
          <Box>{renderContent()}</Box>
        </Box>
      </Box>
    </AnimatedMenu>
  );
};
