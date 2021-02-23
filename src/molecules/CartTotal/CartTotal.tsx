import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';
import { LocaleString } from 'locales/en';

export type CartTotalProps = {
  id: LocaleString;
  amount?: string | number | null;
};

export const CartTotal = ({ id, amount }: CartTotalProps) => {
  return (
    <Grid
      justifyContent="space-between"
      gridAutoFlow="column"
      alignItems="center"
      bg="offwhite.500"
      height="2.4rem"
    >
      <Text
        fontWeight="bold"
        variant="body"
        color="offwhite.1000"
        id={id}
        px="3.2rem"
        py={0}
        my={0}
      />
      <Price
        textAlign="end"
        fontWeight="bold"
        variant="body"
        color="offwhite.1000"
        amount={amount}
        px="2.4rem"
        py={0}
        my={0}
      />
    </Grid>
  );
};
