import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { QuickDelivery } from 'generated/graphql-hooks';

type QuickDeliveryWindowsProps = {
  quickDeliveriyWindows: QuickDelivery;
};

export const QuickDeliveryWindows = ({ quickDeliveriyWindows }: QuickDeliveryWindowsProps) => {
  return (
    <Box>
      <Text
        as="h3"
        variant="body"
        textAlign="center"
        color="mahogany.500"
        id="quick.delivery.delivery.windows"
        fontWeight="500"
        lineHeight={1.5}
        mb={15}
      />
      {Array.isArray(quickDeliveriyWindows?.shippingMethod?.deliverySlots) &&
        quickDeliveriyWindows?.shippingMethod?.deliverySlots?.map(list => {
          return (
            <Text
              as="h3"
              variant="body"
              textAlign="center"
              fontWeight="bold"
              color="mahogany.500"
              lineHeight={1.5}
              key={list.id!}
            >
              {list?.displayActualTime}
            </Text>
          );
        })}
    </Box>
  );
};
