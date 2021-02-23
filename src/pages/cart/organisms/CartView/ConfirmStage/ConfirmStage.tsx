import React, { FC, useMemo, useCallback } from 'react';

import { Grid } from 'atoms/Grid';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { CartViewQuery } from 'generated/graphql-hooks';
import { OrderItemList } from 'pages/orderdetail/molecules/OrderItemList';
import { OrderStatusInfoList } from 'pages/orderdetail/molecules/OrderStatusInfoList';
import useCart from 'pages/cart/context/CartContext';
import { Flex } from 'atoms/Flex';

export type ConfirmStageProps = {
  data: CartViewQuery['cart'];
};

const orderStateFromHeading = {
  'order.detail.delivery.date.heading': 'delivery',
  'order.detail.delivery.address.heading': 'address',
  'order.detail.billing.address.heading': 'address',
  'order.detail.delivery.additional.info.heading': 'delivery',
  'order.detail.delivery.payment.method.heading': 'payment',
  'order.detail.delivery.driver.tip.heading': 'payment',
  'order.detail.total.items.heading': 'cart',
};

export const ConfirmStage: FC<ConfirmStageProps> = ({ data }) => {
  const {
    state: { driverTip, shipAddress, billAddress, card: creditCard, specialInstructions },
    actions: { handleCheckout },
  } = useCart();

  const displayTimeSlot = useMemo(() => {
    if (data) {
      const orders = data;
      if (Array.isArray(orders?.shipments) && orders.shipments?.length > 0) {
        return orders.shipments[0]?.deliverySlot?.displayTime;
      }
      return null;
    }
    return null;
  }, [data]);

  const editOrder = useCallback(
    value => {
      handleCheckout(orderStateFromHeading[value]);
    },
    [handleCheckout],
  );

  return (
    <Grid width={{ xs: '100%', md: '50%', lg: '60%' }} m="auto" p={10}>
      <OrderStatusInfoList
        onEdit={editOrder}
        deliveryDate={data?.shipments?.[0]?.requestedDeliveryDate || ''}
        displayTime={displayTimeSlot}
        driverTip={driverTip?.amount ? Number(driverTip?.amount) : 0}
        phone={data?.shipAddress?.phone}
        specialInstructions={specialInstructions || '-'}
        shipAddress={`${shipAddress?.address1}, ${shipAddress?.city}, ${shipAddress?.zipcode}`}
        billAddress={`${billAddress?.address1}, ${billAddress?.city}, ${billAddress?.zipcode}`}
        lastDigits={creditCard?.lastDigits}
        cardType={creditCard?.ccType}
      />
      <Box px="1.6rem">
        <Flex justifyContent="space-between">
          <Text variant="body" id="order.detail.total.items.heading" py={5} />
          <Text
            variant="body"
            color="mahogany.500"
            id="edit"
            cursor="pointer"
            textDecoration="underline"
            onClick={() => editOrder('order.detail.total.items.heading')}
          />
        </Flex>
        <OrderItemList data={data?.lineItems} />
      </Box>
    </Grid>
  );
};
