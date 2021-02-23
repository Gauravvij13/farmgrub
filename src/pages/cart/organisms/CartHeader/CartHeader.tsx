import React from 'react';

import { Checkout } from 'molecules/Checkout';
import useCart from 'pages/cart/context/CartContext';
import { PlaceOrder } from 'pages/cart/molecules/PlaceOrder';

type CardHeaderProps = {
  total: string | number;
  onClick: () => void;
};
export const CartHeader = ({ total, onClick }: CardHeaderProps) => {
  const {
    state: { stage, nextLoading, nextDisable },
  } = useCart();

  if (stage === 'cart') {
    return <Checkout totalPrice={total} onClick={onClick} />;
  }

  if (stage === 'confirm') {
    return <PlaceOrder loading={nextLoading} disabled={nextDisable} />;
  }

  return <></>;
};
