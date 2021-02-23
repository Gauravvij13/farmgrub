import React from 'react';
import { Chip } from 'atoms/Chip';

export default {
  title: `atoms/Chip`,
};
export const primary = () => <Chip variant="primary" text="ASAP" />;
export const secondary = () => <Chip variant="selected" text="ASAP" />;
