import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { CenteredModal } from 'templates/CenteredModal';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { Button } from 'molecules/Button';

type MessageSentModalProps = {
  message: string;
};

export const MessageSentModal = ({ message }: MessageSentModalProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();

  const handleOkButton = useCallback(() => {
    history.push(`/shop/main`);
  }, [history]);

  return (
    <CenteredModal
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
      closeButtonColor="steelgrey.900"
    >
      <Box pt="0.4rem">
        <Text id="message.modal.heading" variant="title" fontWeight="bold" color="mahogany.500" />
        <Text variant="body" color="mahogany.500" pr="3rem">
          {message}
        </Text>
        <Button
          title="message.modal.ok"
          maxHeight="4rem"
          maxWidth="9.6rem"
          ml="auto"
          mt="2rem"
          onClick={handleOkButton}
        />
      </Box>
    </CenteredModal>
  );
};
