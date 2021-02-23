import React from 'react';
import { CartAdder } from '.';

export default {
  title: `molecules/Cart/CartAdder`,
};

export const Default = () => <CartAdder onChange={() => {}} productName="Milk" />;
