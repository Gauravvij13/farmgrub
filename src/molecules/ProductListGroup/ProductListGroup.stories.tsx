import React from 'react';
import { ProductListGroup } from 'molecules/ProductListGroup';
import { Taxon } from 'generated/graphql-hooks';

export default {
  title: `molecules/Product/ProductListGroup`,
};
const productListGroupData = [
  {
    id: '1',
    name: 'Russell Tomatoes',
    hasChildren: false,
    products: [
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
    ],
  },
  {
    id: '2',
    name: 'Russell Tomatoes',
    hasChildren: false,
    products: [
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
    ],
  },
  {
    id: '3',
    name: 'Russell Tomatoes',
    hasChildren: false,
    products: [
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
    ],
  },
  {
    id: '4',
    name: 'Russell Tomatoes',
    hasChildren: false,
    products: [
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
    ],
  },
  {
    id: '5',
    name: 'Russell Tomatoes',
    hasChildren: false,
    products: [
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
    ],
  },
];

export const productListGroup = () => <ProductListGroup data={productListGroupData as Taxon[]} />;
