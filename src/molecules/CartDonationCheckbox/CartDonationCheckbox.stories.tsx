import React, { useState } from 'react';
import { CartDonationCheckbox } from '.';

export default {
  title: `molecules/Cart/CartDonationCheckbox`,
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return (
    <CartDonationCheckbox
      checked={value}
      onChange={() => {
        setValue(!value);
      }}
    />
  );
};
