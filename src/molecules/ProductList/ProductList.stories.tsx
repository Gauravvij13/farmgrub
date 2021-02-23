import React from 'react';
import { ProductList } from 'molecules/ProductList';
import { ProductListLoader } from 'molecules/ProductListLoader';

export default {
  title: `molecules/Product/ProductList`,
};

const productListData = [
  {
    id: '1',
    name: 'Russell Tomatoes',
    amount: '3.50',
    images: [
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ],
  },
  {
    id: '2',
    name: 'Russell Tomatoes',
    amount: '3.50',
    images: [
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ],
  },
  {
    id: '3',
    name: 'Russell Tomatoes',
    amount: '3.50',
    images: [
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ],
  },
  {
    id: '4',
    name: 'Russell Tomatoes',
    amount: '3.50',
    images: [
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ],
  },
  {
    id: '5',
    name: 'Russell Tomatoes',
    amount: '3.50',
    images: [
      {
        id: '1',
        url:
          'https://user-images.githubusercontent.com/26631076/74833012-9f112480-533e-11ea-85ae-04b53924cbaf.png',
      },
    ],
  },
];

export const Default = () => (
  <ProductList data={productListData} heading="Fruit, Melons and Berries" />
);
export const Loading = () => <ProductListLoader />;
