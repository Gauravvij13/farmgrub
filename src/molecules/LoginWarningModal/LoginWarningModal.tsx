import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { CenteredModal } from 'templates/CenteredModal';

import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { Button } from 'molecules/Button';
import useGuest from '../../organisms/GuestLoginModal/contexts/GuestContext';

export const LoginWarningModal = () => {
  const history = useHistory();
  const {
    state: { loginWarningModalState },
    actions: { setLoginWarningState },
  } = useGuest();

  const handleOkButton = useCallback(() => {
    history.push(`/landing`);
    setLoginWarningState(false);
  }, [history, setLoginWarningState]);

  const closeModal = useCallback(() => {
    setLoginWarningState(false);
  }, [setLoginWarningState]);

  return (
    <CenteredModal
      isVisible={loginWarningModalState!}
      onClose={closeModal}
      closeButtonColor="steelgrey.900"
    >
      <Box pt="0.4rem">
        <Text id="login.warning.message" variant="title" fontWeight="bold" color="mahogany.500" />
        <Box display="flex" justifyContent="center">
          <Button
            title="message.modal.go"
            maxHeight="4rem"
            maxWidth="9.6rem"
            mt="2rem"
            onClick={handleOkButton}
          />
        </Box>
      </Box>
    </CenteredModal>
  );
};
