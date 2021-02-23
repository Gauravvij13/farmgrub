import React from 'react';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';

type TotalPriceProps = {
  price?: string | number | null;
};

export const TotalPrice = ({ price }: TotalPriceProps) => {
  return (
    <Flex>
      <Text variant="body" color="mahogany.500" my={0} id="orders.total" />
      <Price
        variant="body"
        amount={price}
        fontWeight="bold"
        color="mahogany.500"
        my={0}
        lineHeight="1.4rem"
        px="0.4rem"
      />
    </Flex>
  );
};
