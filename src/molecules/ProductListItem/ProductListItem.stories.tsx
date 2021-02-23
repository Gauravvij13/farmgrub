import React from 'react';
import { ProductListItem } from 'molecules/ProductListItem';

export default {
  title: `molecules/Product/ProductListItem`,
};
export const Default = () => (
  <ProductListItem
    id="234"
    name="Russell Potatoes"
    amount="3.50"
    images={[
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ]}
  />
);
