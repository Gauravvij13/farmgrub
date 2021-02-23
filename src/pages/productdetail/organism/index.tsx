import React, { useState, useCallback, useMemo } from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import {
  useAddProductToCartMutation,
  Product,
  useCartViewQuery,
  useCartViewLazyQuery,
  Supplier,
  useUserDetailsQuery,
  LineItem,
} from 'generated/graphql-hooks';
import { hydrate } from 'utils/persist';
import { showError } from 'utils/toast';
import useAuth from 'contexts/Authentication';
import useVisibleState from 'hooks/useVisibleState';
import { logEventAnalytics } from 'utils/analytics';
import useCart from 'pages/cart/context/CartContext';
import LoyaltyCardModal from 'organisms/LoyaltyCardModal';
import { SimilarProducts } from 'organisms/SimilarProducts';
import WeigelFreeMilkModal from 'organisms/WeigelFreeMilkModal';
import { getCartValuesFromData } from 'pages/cart/utils/getInitialValues';

import { ProductDescription } from '../molecules/ProductDescription';
import { PurchasableCartAdder } from '../molecules/PurchasableCartAdder';
import { ProductSlider } from '../molecules/ProductSlider/ProductSlider';
import useGuest from '../../../organisms/GuestLoginModal/contexts/GuestContext';
import { ProductDetailInfo } from '../molecules/ProductDetailInfo/ProductDetailInfo';

type ProductDetailViewProps = {
  data: Product;
};

let qty = 0;

export const ProductDetailView = ({ data }: ProductDetailViewProps) => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const {
    actions: { setLoginWarningState },
  } = useGuest();

  const [loyaltyCardSupplier, setLoyaltyCardSupplier] = useState<Supplier | undefined>();

  const { visible, show: showRewardModal, hide: hideRewardModal } = useVisibleState();

  const { data: userDetails } = useUserDetailsQuery({
    fetchPolicy: 'cache-and-network',
    skip: !isLoggedIn,
  });

  const {
    state: { lineItems = [] } = { lineItems: [] },
    actions: { updateCartState } = { updateCartState: undefined },
  } = useCart();

  const [addProductToCart, { loading }] = useAddProductToCartMutation();

  const { data: cartViewData } = useCartViewQuery({
    skip: !isLoggedIn,
    onCompleted(cartData) {
      if (updateCartState) {
        updateCartState(getCartValuesFromData(cartData?.cart));
      }
    },
  });

  const [cartViewlazyQuery] = useCartViewLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [totalPrice, setTotalPrice] = useState<string | number>(data.amount!);

  const handleAddProductToCart = useCallback(
    async (quantity: number = qty) => {
      if (isLoggedIn) {
        try {
          if (quantity === 0) {
            showError('product.cart.error.zero', true);
          } else {
            const { data: cartData } = await addProductToCart({
              variables: { input: { productId: data.id!, quantity } },
            });

            // This is because sometimes a user won't have a cart, and when we add a product to a cart,
            // It will be added but there is no way for apollo to know the id in advance.
            if (updateCartState) {
              updateCartState({
                ...getCartValuesFromData(cartData?.addCart),
                cartStage: 'cart',
                stage: 'cart',
              });
            }
            if (!cartViewData?.cart) {
              cartViewlazyQuery();
            }
            // showToast('product.cart.add.success', true);
            qty = 0;

            // begin checkout analytics
            const analyticsData: any = cartData?.addCart || {};
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
          }
        } catch (e) {}
      } else {
        setLoginWarningState(true);
      }
    },
    [
      addProductToCart,
      data.id,
      cartViewlazyQuery,
      cartViewData,
      isLoggedIn,
      setLoginWarningState,
      updateCartState,
    ],
  );

  const checkIfRewardAvailable = useCallback(
    async (quantity: number = qty) => {
      const sup = data.suppliers?.find(sp => sp.supportsLoyaltyCards === true);

      // check if user has loyalty card for supplier or not
      const isRewardCard = userDetails?.me?.loyaltyCards?.find(lc => lc.supplier.id === sup?.id);

      if (sup?.id === '32' && quantity > 16 && isRewardCard) {
        showRewardModal();
      } else {
        await handleAddProductToCart(quantity);
      }
    },
    [data.suppliers, handleAddProductToCart, showRewardModal, userDetails],
  );

  const preAddToCard = useCallback(
    async (quantity: number) => {
      if (isLoggedIn) {
        // find supplier that supports loyalty card
        const sup = data.suppliers?.find(supplier => supplier.supportsLoyaltyCards === true);

        // get doNotAskAgain data from cookies
        const loyaltyCards: Array<Pick<Supplier, 'id'> & {
          doNotAskAgain?: boolean;
        }> = hydrate('loyaltycards') || [];

        // check if user requested "do not ask again" or not for supplier that supports loyatly card
        const loyaltyCardSup = loyaltyCards.find(lc => lc.id === sup?.id);

        // check if user has loyalty card for supplier or not
        const isRewardCard = !userDetails?.me?.loyaltyCards?.find(lc => lc.supplier.id === sup?.id);

        // check if any supplier supports loyalty card
        // check if user requested "do not ask again"
        // check if user has loyalty card attached to account for supplier
        qty = quantity;
        if (sup && !loyaltyCardSup?.doNotAskAgain && isRewardCard) {
          // copy quantity to variable so that when loyalty card is saved,
          // we can add product with same quantity as user selected

          // ask for loyalty card from user
          setLoyaltyCardSupplier(sup);
        } else {
          // add to cart
          await checkIfRewardAvailable(quantity);
        }
      } else {
        await checkIfRewardAvailable(quantity);
      }
    },
    [isLoggedIn, data.suppliers, userDetails, checkIfRewardAvailable],
  );

  const handleQuantityChange = useCallback(
    (quantity: number = qty) => {
      if (data.amount) {
        setTotalPrice((quantity * Number(data.amount)).toFixed(2));
      }
    },
    [data, setTotalPrice],
  );

  const priceTag = useMemo<string | null | undefined>(
    () =>
      data?.productProperties?.find(property => property?.property?.name === 'standard_price')
        ?.value,
    [data],
  );

  const maxQuantity = useMemo(
    () =>
      lineItems.find(item => item.product?.id === data?.id)?.quantity
        ? (data?.totalOnHand || 0) -
          (lineItems.find(item => item.product?.id === data?.id)?.quantity || 0)
        : data.totalOnHand,
    [data, lineItems],
  );

  const productDetailInfoElement = (
    <ProductDetailInfo
      name={data?.name}
      farms={data?.suppliers!}
      price={data?.amount}
      priceTag={priceTag}
      totalPrice={totalPrice}
      purchasable={data?.defaultVariant?.purchasable && data.isAvailable === true}
    />
  );

  const sliderImages = <ProductSlider images={data?.images!} productName={data?.name} />;

  return (
    <Box>
      <Grid justifySelf="center" bg="offwhite.0" alignItems="start" pb="2rem">
        <Grid gridGap={18} pt={10}>
          <Grid display={{ xs: 'block', md: 'none' }}>
            {sliderImages}
            {productDetailInfoElement}
          </Grid>
          <Box display={{ xs: 'none', md: 'block' }}>
            <Grid gridTemplateColumns="1fr 2fr 1fr" alignItems="end">
              {productDetailInfoElement}
              {sliderImages}
              <Grid />
            </Grid>
          </Box>
          <PurchasableCartAdder
            onChange={handleQuantityChange}
            loading={loading}
            addToCart={preAddToCard}
            totalPrice={totalPrice}
            purchasable={data?.defaultVariant?.purchasable!}
            isAvailable={data?.isAvailable!}
            maxQuantity={maxQuantity}
            productName={data.name || ''}
            productId={data.id}
            variantId={data?.defaultVariant?.id}
          />
          <ProductDescription description={data?.description} />
          <SimilarProducts productId={data.id!} />
          {loyaltyCardSupplier && (
            <LoyaltyCardModal
              visible
              onSuccess={checkIfRewardAvailable}
              onClose={() => setLoyaltyCardSupplier(undefined)}
              supplier={loyaltyCardSupplier}
            />
          )}
          {visible && (
            <WeigelFreeMilkModal
              visible
              onSuccess={handleAddProductToCart}
              onClose={hideRewardModal}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailView;
