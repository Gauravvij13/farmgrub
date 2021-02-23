import React, { useState, useCallback, FC } from 'react';

import { isArray } from 'util';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';
import { Button } from 'molecules/Button';
import useCart from 'pages/cart/context/CartContext';
import { QuantityCounter, QuantityCounterProps } from 'molecules/QuantityCounter';

export type AddToCartProps = {
  onChange?: QuantityCounterProps['onChange'];
  loading?: boolean;
  quantity?: number;
  addToCart?: (quantity: number) => Promise<void>;
  totalPrice?: number | string | null;
  productName: string;
  productId?: string | null;
} & Partial<QuantityCounterProps>;

export const CartAdder: FC<AddToCartProps> = ({
  quantity,
  loading,
  onChange,
  addToCart,
  totalPrice,
  maxQuantity,
  errorQty,
  productName,
}) => {
  const { state: { lineItems } = { lineItems: [] } } = useCart();

  const [internalQuantity, setInternalQuantity] = useState(quantity);

  const handleHandleInternalAddToCart = useCallback(async () => {
    if (typeof addToCart === 'function') {
      await addToCart(internalQuantity ?? 0);
      if (lineItems && isArray(lineItems) && maxQuantity) {
        setInternalQuantity(prevVal => (maxQuantity - (prevVal || 0) ? 1 : 0));
      }
    }
  }, [addToCart, internalQuantity, lineItems, maxQuantity]);

  const handleInternalOnChange = useCallback(
    (value: number) => {
      setInternalQuantity(value);
      if (typeof onChange === 'function') {
        onChange(value);
      }
    },
    [setInternalQuantity, onChange],
  );

  return (
    <Box width="100%" bg="offwhite.500">
      <Grid
        height="6.4rem"
        maxWidth="44rem"
        alignItems="center"
        gridTemplateColumns={{ xs: '2fr 2fr', md: '2fr 1fr 2fr' }}
        gridGap={22}
        px="1.6rem"
        justifyContent="space-between"
        m="auto"
      >
        <QuantityCounter
          initialValue={internalQuantity}
          onChange={handleInternalOnChange}
          maxQuantity={maxQuantity}
          errorQty={errorQty}
          productName={productName}
        />
        <Box display={{ xs: 'none', md: 'block' }}>
          <Grid gridAutoFlow="column" alignItems="center">
            <Text
              as="h3"
              variant="bigBodyBold"
              color="applegreen.500"
              id="cartlistitem.total"
              pr={3}
            />
            <Price
              variant="bigBodyBold"
              color="applegreen.500"
              amount={totalPrice}
              fontWeight="medium"
            />
          </Grid>
        </Box>
        <Button
          maxWidth="16rem"
          variant="primary"
          size="small"
          type="submit"
          title="addtocart.buttontext"
          loading={loading}
          alignItems="center"
          onClick={handleHandleInternalAddToCart}
        />
      </Grid>
    </Box>
  );
};
CartAdder.defaultProps = {
  quantity: 1,
};
