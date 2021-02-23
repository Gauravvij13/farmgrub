import React, { FC } from 'react';
import { Grid } from 'atoms/Grid';
import { Button, ButtonProps } from 'molecules/Button';

export type PlaceOrderProps = {
  onClick?: ButtonProps['onClick'];
  disabled?: boolean;
  loading?: boolean;
};
export const PlaceOrder: FC<PlaceOrderProps> = ({ disabled, loading, onClick }) => {
  return (
    <Grid
      justifyItems="center"
      maxHeight="15rem"
      px="1.6rem"
      width={{ md: '60%' }}
      mx="auto"
      position="sticky"
      top="5.4rem"
      bg="offwhite.500"
      zIndex={1}
      // pb={10}
    >
      <Button
        type="button"
        title="cart.button.placeorder"
        variant={disabled ? 'disabled' : 'primary'}
        onClick={onClick}
        loading={loading}
      />
    </Grid>
  );
};
