import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

type MissionHeaderProps = {
  title?: LocaleString;
  heading?: LocaleString;
};
export const MissionHeader = ({ title, heading }: MissionHeaderProps) => {
  return (
    <Box
      position="absolute"
      top={{ xs: '2rem', md: '2.5rem' }}
      mx="auto"
      textAlign="center"
      width="100%"
      px={{ xs: '6rem', md: '5rem' }}
    >
      <Text variant="body" color="mahogany.500" fontWeight="bold" id={title} mb={0} />
      <Text variant="heading" color="mahogany.500" fontWeight="bold" id={heading} mt={5} />
    </Box>
  );
};
