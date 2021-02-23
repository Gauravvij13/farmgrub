import React from 'react';
import { AddressProvider } from '.';

export default {
  title: `molecules/AddressProvderModal`,
};

export const Opened = () => <AddressProvider isVisible onClose={() => {}} />;
