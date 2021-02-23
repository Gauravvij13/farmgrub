import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';
import { LocaleString } from 'locales/en';

export type CartPriceDetailProps = {
  id: LocaleString;
  amount?: string | number | null;
  /**
   * Removes $ sign frmo the right side, is used when we want to display something else than a price
   */
  isText?: boolean;
};

export const CartPriceDetail = ({ id, amount, isText }: CartPriceDetailProps) => {
  return (
    <Grid
      height="2.4rem"
      bg="offwhite.500"
      justifyContent="space-between"
      gridAutoFlow="column"
      alignItems="center"
    >
      <Text
        fontWeight="bold"
        variant="small"
        color="offwhite.1000"
        id={id}
        px="3.2rem"
        py={0}
        my={0}
      />
      {isText ? (
        <Text
          textAlign="end"
          fontWeight="bold"
          variant="small"
          color="offwhite.1000"
          px="2.4rem"
          py={0}
          my={0}
        >
          {amount}
        </Text>
      ) : (
        <Price
          textAlign="end"
          fontWeight="bold"
          variant="small"
          color="offwhite.1000"
          amount={amount}
          px="2.4rem"
          py={0}
          my={0}
        />
      )}
    </Grid>
  );
};
