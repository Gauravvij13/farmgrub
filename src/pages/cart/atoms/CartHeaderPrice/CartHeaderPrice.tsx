import React from 'react';
import { Price, PriceProps } from 'atoms/Price';

type CartHeaderPriceProps = {} & PriceProps;
export const CartHeaderPrice = (props: CartHeaderPriceProps) => (
  <Price variant="field" fontWeight="bold" color="mahogany.500" px="0.5rem" {...props} />
);
