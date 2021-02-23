import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';

export const FarmGrubLogo = () => {
  return (
    <Box alignItems="center">
      <Text
        variant="heading"
        fontWeight="bold"
        color="offwhite.0"
        id="menuLogo.farm"
        textAlign="center"
        mb={0}
        p={0}
      />
      <Text
        variant="heading"
        fontWeight="bold"
        color="offwhite.0"
        id="menuLogo.grub"
        textAlign="center"
        mt={0}
        pt={0}
      />
    </Box>
  );
};
