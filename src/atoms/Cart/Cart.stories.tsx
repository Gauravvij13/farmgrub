import React from 'react';
import { Cart } from 'atoms/Cart';

export default {
  title: `atoms/Cart`,
};
export const emptyCart = () => <Cart />;
export const cart = () => <Cart number={5} />;
