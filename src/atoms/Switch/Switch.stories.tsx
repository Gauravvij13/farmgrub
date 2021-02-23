import React, { useState } from 'react';
import { Switch } from 'atoms/Switch';

export default {
  title: `atoms/Switch`,
};
export const On = () => <Switch value />;
export const Off = () => <Switch value={false} />;

export const Toggle = () => {
  const [value, setValue] = useState(false);
  return <Switch value={value} onChange={() => setValue(!value)} />;
};
