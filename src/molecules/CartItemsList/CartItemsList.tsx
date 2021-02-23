import React, { useCallback } from 'react';
import { Grid } from 'atoms/Grid';
import { CartListItem } from 'molecules/CartListItem';
import { useUpdateProductInsideCartMutation, LineItem } from 'generated/graphql-hooks';
import { Box } from 'atoms/Box';
import { Spinner } from 'atoms/Spinner';
import useCart, { CartContext } from 'pages/cart/context/CartContext';
import { getCartValuesFromData } from 'pages/cart/utils/getInitialValues';

type CartItemsList = {
  data: Array<Partial<LineItem>>;
};
export const CartItemsList = ({ data }: CartItemsList) => {
  const [updateToCart, { loading }] = useUpdateProductInsideCartMutation();
  const {
    actions: { updateCartState },
  } = useCart();

  const handleQuantityChange = useCallback(
    ({ id }: { id: string }) => async (quantity: number) => {
      try {
        const { data: response } = await updateToCart({
          variables: { input: { id, quantity } },
        });
        updateCartState({
          ...getCartValuesFromData(response?.updateProductToCart),
          cartStage: response?.updateProductToCart?.state as CartContext['cartStage'],
        });
      } catch (e) {}
    },
    [updateToCart, updateCartState],
  );

  return (
    <>
      <Box height="2rem" width="2rem" px="3rem" ml="auto" bg="offwhite.0">
        {loading && <Spinner color="primary.500" />}
      </Box>
      <Grid gridGap="0.2rem" bg="pale.500">
        {Array.isArray(data) &&
          data.map(item => (
            <CartListItem
              productId={item?.product?.id!}
              onQuantityChange={handleQuantityChange({ id: item.id! })}
              initialQuantity={item.quantity}
              key={item.id!}
              priceTag={
                item.product?.productProperties?.find(
                  prop => prop.property?.name === 'standard_price',
                )?.value
              }
              amount={item.product?.amount}
              adjustments={item.adjustments}
              image={item.product?.images?.[0]?.thumbnail}
              imageAlt={item.product?.images?.[0]?.altText}
              imageTitle={item.product?.images?.[0]?.title}
              name={item?.product?.name}
              maxQuantity={item?.product?.totalOnHand}
              errorQty={
                (item?.product?.totalOnHand || 0) < (item.quantity || 1)
                  ? item?.product?.totalOnHand || 0
                  : undefined
              }
            />
          ))}
      </Grid>
    </>
  );
};
