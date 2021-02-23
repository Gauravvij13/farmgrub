import React from 'react';
import { OrderListItem } from 'molecules/OrderListItem';

export default {
  title: `molecules/OrderListItem`,
};
export const orderListItem = () => (
  <OrderListItem
    orderId="656565"
    orderStatus="Out for delivery"
    price="100"
    deliveryDate="2020-01-01"
  />
);
