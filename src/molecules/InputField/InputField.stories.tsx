import React from 'react';
import { InputField } from 'molecules/InputField';

export default {
  title: `molecules/Input/InputField`,
};
export const primary = () => <InputField variant="primary" label="appname" />;
export const error = () => (
  <InputField variant="primary" label="signup.email" error="signup.error.email" />
);
export const warning = () => (
  <InputField variant="primary" label="signup.email" warning="signup.error.email" />
);
