import React from 'react';
import { Text } from 'atoms/Text';

type DescriptionProps = {
  children?: any;
};
export const Description = ({ children }: DescriptionProps) => {
  return (
    <Text as="h3" p="1.7rem" variant="small" color="mahogany.500" lineHeight="1.7rem">
      {children}
    </Text>
  );
};
