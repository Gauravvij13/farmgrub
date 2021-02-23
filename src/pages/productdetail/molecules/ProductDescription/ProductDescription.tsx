import React from 'react';
import { Text } from 'atoms/Text';

type ProductDescriptionProps = {
  description?: string | null;
};

export const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <>
      <Text color="mahogany.500" variant="small" px="1.6rem" lineHeight="1.8rem" my={0} py={0}>
        {description}
      </Text>
    </>
  );
};
