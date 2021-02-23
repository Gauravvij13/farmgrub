/* eslint-disable global-require */
import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';

export const MenuLogo = () => {
  return (
    <Box
      bg="transparent"
      height={4}
      width={4}
      border="0.4rem solid"
      borderColor="secondary.500"
      p={40}
      fontFamily="heading"
      mb={20}
    >
      <Box width="100%" ml={-20} mt={-42}>
        <Text variant="heading" fontWeight="bold" color="secondary.500" id="menuLogo.farm" />
        <Text
          variant="heading"
          fontWeight="bold"
          color="offwhite.500"
          mt={-17}
          id="menuLogo.grub"
        />
      </Box>
    </Box>
  );
};
