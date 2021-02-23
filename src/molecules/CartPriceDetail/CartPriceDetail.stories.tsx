import React from 'react';
import { CartPriceDetail } from 'molecules/CartPriceDetail';

export default {
  title: `molecules/Cart/CartPriceDetail`,
};
export const cartPriceDetail = () => <CartPriceDetail amount="8" id="cart.total.shipping" />;
