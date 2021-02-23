import React from 'react';

import { Box } from 'atoms/Box';
import { ProductName } from 'molecules/ProductListItem/atoms/ProductName';
import { ProductPrice } from '../../atoms/ProductPrice';

interface ProductInfoProps {
  text?: string | null;
  amount?: string | number | null;
  priceTag?: string | null;
}
export const ProductInfo = ({ text, amount, priceTag }: ProductInfoProps) => {
  return (
    <Box textAlign="center" pt=".9rem" height="5.5rem">
      <ProductName text={text} />
      <ProductPrice amount={amount} priceTag={priceTag} />
    </Box>
  );
};
