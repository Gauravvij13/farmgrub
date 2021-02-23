import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';

export const ContactTimings = () => {
  return (
    <Box>
      <Text
        variant="body"
        id="contact.days"
        color="mahogany.500"
        textAlign="center"
        my={0}
        pt={0}
        pb="0.6rem"
      />
      <Text variant="body" id="contact.time" color="mahogany.500" textAlign="center" m={0} p={0} />
    </Box>
  );
};
