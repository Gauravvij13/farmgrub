import React from 'react';
import { PriceWithUnit } from 'atoms/PriceWithUnit';

export default {
  title: `atoms/PriceWithUnit`,
};
export const priceWithUnit = () => <PriceWithUnit amount="24" unit="LB" />;
