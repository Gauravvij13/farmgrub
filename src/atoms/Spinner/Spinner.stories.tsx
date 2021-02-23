import React from 'react';
import { Spinner } from 'atoms/Spinner';
import { Box } from 'atoms/Box';

export default {
  title: `atoms/Spinner`,
};

export const normal = () => (
  <Box color="primary.500" height="100px" width="100px">
    <Spinner />
  </Box>
);
