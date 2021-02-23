import React from 'react';
import { Button } from 'atoms/Button';

export default {
  title: `atoms/Button`,
};
export const primary = () => <Button variant="primary">Hello World !!</Button>;
export const secondary = () => <Button variant="secondary">Hello World !!</Button>;
export const disabled = () => <Button variant="disabled">Hello World !!</Button>;
