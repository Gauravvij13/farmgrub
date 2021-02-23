import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';
import { LocaleString } from 'locales/en';
import { Flex } from 'atoms/Flex';

export type CartDiscountDetailProps = {
  id?: LocaleString;
  amount?: string | number | null;
  name?: string;
};

export const CartDiscountDetail = ({ id, amount, name }: CartDiscountDetailProps) => {
  return (
    <Grid
      height="2.4rem"
      bg="offwhite.500"
      justifyContent="space-between"
      gridAutoFlow="column"
      alignItems="center"
    >
      <i>
        <Text variant="small" color="offwhite.1000" id={id} px="3.2rem" py={0} my={0}>
          {name}
        </Text>
      </i>
      <Flex alignItems="center" px="2.4rem">
        <Text as="span">-</Text>
        <i>
          <Price
            textAlign="end"
            variant="small"
            fontWeight="500"
            color="offwhite.1000"
            amount={amount}
            py={0}
            my={0}
          />
        </i>
      </Flex>
    </Grid>
  );
};
