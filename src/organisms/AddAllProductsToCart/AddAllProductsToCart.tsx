import React, { FC, useCallback } from 'react';
import { Grid } from 'atoms/Grid';
import { Button } from 'molecules/Button';
import useCart from 'pages/cart/context/CartContext';
import useAuth from 'contexts/Authentication';
import useGuest from 'organisms/GuestLoginModal/contexts/GuestContext';
import { logEventAnalytics } from 'utils/analytics';
import {
  LineItem,
  useAddCategoryToCartMutation,
  useCartViewLazyQuery,
  useCartViewQuery,
} from 'generated/graphql-hooks';
import { getCartValuesFromData } from 'pages/cart/utils/getInitialValues';

export type AddAllProductsToCartProps = { categoryId: string };

export const AddAllProductsToCart: FC<AddAllProductsToCartProps> = ({ categoryId }) => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const {
    actions: { setLoginWarningState },
  } = useGuest();

  const { data: cartViewData } = useCartViewQuery({
    skip: !isLoggedIn,
    onCompleted(cartData) {
      if (updateCartState) {
        updateCartState(getCartValuesFromData(cartData?.cart));
      }
    },
  });

  const { actions: { updateCartState } = { updateCartState: undefined } } = useCart();

  const [cartViewlazyQuery] = useCartViewLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [addProductToCart, { loading }] = useAddCategoryToCartMutation();

  const handleAddProductToCart = useCallback(async () => {
    if (isLoggedIn) {
      try {
        const { data: cartData } = await addProductToCart({
          variables: { input: { taxonId: categoryId } },
        });

        // This is because sometimes a user won't have a cart, and when we add a product to a cart,
        // It will be added but there is no way for apollo to know the id in advance.
        if (updateCartState) {
          updateCartState({
            ...getCartValuesFromData(cartData?.addCategoryToCart),
            cartStage: 'cart',
            stage: 'cart',
          });
        }
        if (!cartViewData?.cart) {
          cartViewlazyQuery();
        }

        // begin checkout analytics
        const analyticsData: any = cartData?.addCategoryToCart || {};
        logEventAnalytics(
          'add_to_cart',
          analyticsData.total,
          analyticsData.lineItems?.map((l: LineItem) => ({
            item_id: l.id || '',
            id: l.id || '',
            quantity: l.quantity || 0,
            price: Number(l.price || 0),
            item_name: l.product?.name || '',
            name: l.product?.name || '',
          })) || [],
        );
      } catch (e) {}
    } else {
      setLoginWarningState(true);
    }
  }, [
    addProductToCart,
    cartViewlazyQuery,
    cartViewData,
    isLoggedIn,
    setLoginWarningState,
    updateCartState,
    categoryId,
  ]);

  return (
    <Grid bg="white" p="2rem" justifyContent="center" justifyItems="center">
      <Button
        px="3rem"
        size="small"
        fontWeight="500"
        maxWidth="24rem"
        loading={loading}
        alignItems="center"
        title="products.addall.button"
        disabled={isLoggedIn && !cartViewData}
        onClick={handleAddProductToCart}
      />
    </Grid>
  );
};
