import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';

export const PartnerHeading = () => {
  return (
    <Box py="2rem" justifyContent="center" width="100%">
      <Text
        variant="field"
        color="mahogany.500"
        fontWeight="bold"
        id="farms.partner"
        textAlign="center"
        m={0}
        p={0}
      />
      <Box width="4rem" height="0.2rem" bg="mahogany.500" m={0} mx="auto" mt="1.6rem" />
    </Box>
  );
};
