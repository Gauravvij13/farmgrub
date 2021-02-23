import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import useGuest from '../../contexts/GuestContext';

export const ReEnterZipCodeButton = () => {
  const {
    actions: { setGuestRoute },
  } = useGuest();
  return (
    <Box pt="15">
      <Text
        variant="field"
        color="dirtyblue.500"
        fontWeight="bold"
        id="reenter.zipcode"
        textAlign="center"
        cursor="pointer"
        onClick={() => setGuestRoute('zipcode')}
      />
    </Box>
  );
};
