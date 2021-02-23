import React from 'react';
import { Text, TextProps } from 'atoms/Text';

import { Box } from 'atoms/Box';
import { Price } from 'atoms/Price';

interface ProductPriceProps extends TextProps {
  amount?: string | number | null;
  priceTag?: string | null;
}
export const ProductPrice = ({ amount, priceTag }: ProductPriceProps) => {
  return (
    <Box display="flex" alignItems="baseline" justifyContent="center">
      <Price amount={amount} />
      {priceTag && (
        <Text
          as="span"
          variant="small"
          fontWeight="normal"
          color="mahogany.500"
          lineHeight="1.8rem"
          paddingLeft="2"
        >
          {priceTag}
        </Text>
      )}
    </Box>
  );
};
