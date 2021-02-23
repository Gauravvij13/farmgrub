import React from 'react';
import { Box } from 'atoms/Box';

import { NavLink } from 'react-router-dom';
import { Order } from 'generated/graphql-hooks';

import { OrderListItem } from 'molecules/OrderListItem';

type OrderListProp = {
  data?: Array<Partial<Order>>;
};

export const OrderList = ({ data }: OrderListProp) => {
  return (
    <Box bg="offwhite.500" overflowY="scroll" overflow="hidden">
      {Array.isArray(data) &&
        data.map(order => (
          <NavLink to={`/orders/${order?.id}`} key={order?.id!}>
            <OrderListItem
              orderId={order?.number}
              orderStatus={order?.state}
              price={order?.total}
              deliveryDate={
                Array.isArray(order?.shipments) ? order?.shipments[0]?.requestedDeliveryDate : ''
              }
            />
          </NavLink>
        ))}
    </Box>
  );
};
