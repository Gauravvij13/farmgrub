import React from 'react';
import { OrderList } from 'molecules/OrderList';

export default {
  title: `molecules/OrderList`,
};

const orderListData = [
  {
    id: '535353',
    state: 'delivered',
    total: 655,
    createdAt: 'Tuesday 31, 2020',
  },
  {
    id: '535353',
    state: 'delivered',
    total: 655,
    createdAt: 'Tuesday 31, 2020',
  },
  {
    id: '535353',
    state: 'delivered',
    total: 655,
    createdAt: 'Tuesday 31, 2020',
  },
  {
    id: '535353',
    state: 'delivered',
    total: 655,
    createdAt: 'Tuesday 31, 2020',
  },
  {
    id: '535353',
    state: 'delivered',
    total: 655,
    createdAt: 'Tuesday 31, 2020',
  },
];

export const Default = () => {
  return <OrderList data={orderListData} />;
};
