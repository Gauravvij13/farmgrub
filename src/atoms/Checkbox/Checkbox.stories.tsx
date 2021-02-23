import React, { useState } from 'react';
import { Checkbox } from 'atoms/Checkbox';

export default {
  title: `atoms/Checkbox`,
};
export const Checked = () => <Checkbox checked />;
export const Unchecked = () => <Checkbox checked={false} />;
export const Toggle = () => {
  const [checked, setChecked] = useState(true);
  return <Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
};
