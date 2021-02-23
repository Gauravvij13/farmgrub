import React from 'react';
import { DeliverySlots } from 'molecules/DeliverySlots';

export default {
  title: `molecules/DeliverySlots`,
};
export const primary = () => (
  <DeliverySlots heading="Today" selectedChipId="" date="" selectedDate="" />
);
