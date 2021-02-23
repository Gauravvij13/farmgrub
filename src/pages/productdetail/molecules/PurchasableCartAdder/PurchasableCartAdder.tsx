import React from 'react';
import { CartAdder, AddToCartProps } from 'molecules/CartAdder';
import { ProductComingSoon } from '../ProductComingSoon';

type PurchasableCartAdderProps = {
  purchasable: boolean;
  isAvailable: boolean;
  variantId?: string | null;
} & AddToCartProps;

export const PurchasableCartAdder = ({
  purchasable,
  isAvailable,
  variantId,
  ...rest
}: PurchasableCartAdderProps) => {
  if (purchasable && isAvailable) {
    return <CartAdder {...rest} />;
  }
  return <ProductComingSoon productId={variantId} />;
};
