import React from 'react';
import { Box } from 'atoms/Box';

import DeliveryInstructionForm from './components/DeliveryInstructionForm';

export const DeliveryInstruction = () => {
  return (
    <Box py={10}>
      <DeliveryInstructionForm />
    </Box>
  );
};
