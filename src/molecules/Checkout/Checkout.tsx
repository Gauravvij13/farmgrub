import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { Price } from 'atoms/Price';
import { Button, ButtonProps } from 'molecules/Button';
import { NavLink } from 'react-router-dom';

export type CheckoutProps = {
  totalPrice: string | number;
  variant?: ButtonProps['variant'];
  onClick?: ButtonProps['onClick'] | (() => void);
  loading?: boolean;
  disabled?: boolean;
};

export const Checkout = ({ totalPrice, variant, onClick, loading, disabled }: CheckoutProps) => {
  return (
    <Grid
      justifyItems="center"
      maxHeight="15rem"
      px="1.6rem"
      width={{ md: '50%', lg: '60%' }}
      mx={{ md: 'auto' }}
    >
      <Flex alignItems="center">
        <Text variant="field" color="mahogany.500" id="cart.total.subtotal" />
        <Price
          amount={totalPrice}
          variant="field"
          fontWeight="bold"
          color="mahogany.500"
          px="0.5rem"
        />
      </Flex>
      <Button
        type="button"
        title="cart.button.checkout"
        variant={disabled ? 'disabled' : variant}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
      />

      <NavLink to="/">
        <Text
          textAlign="center"
          variant="body"
          id="cart.shopping"
          color="applegreen.500"
          fontWeight="bold"
        />
      </NavLink>
    </Grid>
  );
};

Checkout.defaultProps = {
  shoping: false,
  variant: 'primary',
};
