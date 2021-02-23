import React, { FC } from 'react';
import { Box } from 'atoms/Box';

export const AppWrapper: FC = ({ children }) => {
  return (
    <Box bg="darklavender.500" height="100%">
      <Box
        bg="darklavender.600"
        height="100%"
        maxWidth={{ md: '74rem', xm: '92rem' }}
        px={{ xs: '0rem', md: '1.1rem' }}
        mx="auto"
      >
        <Box bg="white" height="100%">
          {children || null}
        </Box>
      </Box>
    </Box>
  );
};
