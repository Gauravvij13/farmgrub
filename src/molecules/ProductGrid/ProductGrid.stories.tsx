import React from 'react';
import { ProductGrid } from 'molecules/ProductGrid';

export default {
  title: `molecules/Product/ProductGrid`,
};

const productGridData = [
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
  {
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
  <ProductGrid products={productGridData} heading="Fruit, Melons and Berries" />
);
