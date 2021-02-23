import React from 'react';
import { Loader } from 'molecules/Loader';

export default {
  title: `molecules/Loader`,
};
export const small = () => <Loader size="small" />;
export const medium = () => <Loader size="medium" />;
export const large = () => <Loader size="large" />;
