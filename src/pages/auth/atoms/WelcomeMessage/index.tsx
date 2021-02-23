import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';

export const WelcomeMessage = () => {
  return (
    <Box>
      <Text
        as="h3"
        color="mahogany.500"
        textAlign="center"
        variant="heading"
        id="splashscreen.heading1"
        textTransform="uppercase"
        lineHeight="140%"
        fontWeight="medium"
        px={{ xs: 24 }}
      />
      <Text
        as="h3"
        color="mahogany.500"
        textAlign="center"
        variant="heading"
        id="splashscreen.heading2"
        textTransform="uppercase"
        lineHeight="140%"
        fontWeight="medium"
        px={{ xs: 24 }}
      />
    </Box>
  );
};
