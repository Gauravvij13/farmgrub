import React from 'react';
import { DeliverHeading } from 'atoms/DeliverHeading';

export default {
  title: `atoms/DeliverHeading`,
};
export const deliverHeading = () => (
  <DeliverHeading heading="deliver.chips.heading" time="Today" date="Thursday March 19" />
);
