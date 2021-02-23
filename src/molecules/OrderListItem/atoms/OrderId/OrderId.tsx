import React from 'react';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';

export type OrderIdProps = {
  orderId?: string | number | null;
};

export const OrderId = ({ orderId }: OrderIdProps) => {
  return (
    <Flex>
      <Text variant="title" fontWeight="bold" color="applegreen.500" my={0} id="orders.id" />
      <Text variant="title" fontWeight="bold" color="applegreen.500" my={0}>
        {orderId}
      </Text>
    </Flex>
  );
};
