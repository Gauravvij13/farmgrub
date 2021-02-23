import React from 'react';
import { Button } from 'molecules/Button';

export default {
  title: `molecules/Button`,
};
export const primary = () => <Button variant="primary" title="appname" />;
export const loading = () => <Button variant="primary" title="signup.email" loading />;
