import React from 'react';
import { ProductDetailInfo } from '.';

export default {
  title: `molecules/Product/ProductDetailInfo`,
};

export const productDetailInfo = () => (
  <ProductDetailInfo
    tag="tomatino vegisa"
    name="tomato is"
    price="0.23"
    farms={[
      { id: '1', name: 'fruits farm', supportsLoyaltyCards: false },
      { id: '2', name: 'Supplier 2', supportsLoyaltyCards: true },
    ]}
    totalPrice="50"
  />
);
