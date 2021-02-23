import React from 'react';
import { CartPaymentTotal } from 'molecules/CartPaymentTotal';

export default {
  title: `molecules/Cart/CartPaymentTotal`,
};
export const cartPaymentTotal = () => (
  <CartPaymentTotal merchandiseTotal={28} shipping={11} salestax={13} total={100} />
);
