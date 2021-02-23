import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { Box } from 'atoms/Box';
import Modal from 'react-modal';
import { Form, Formik } from 'formik';
import { Redirect, useHistory } from 'react-router-dom';

import { Checkout } from 'molecules/Checkout';
import { ErrorPage } from 'molecules/ErrorPage';
import { CartItemsList } from 'molecules/CartItemsList';
import { PlaceOrder } from 'pages/cart/molecules/PlaceOrder';
import { CartPaymentTotal } from 'molecules/CartPaymentTotal';
import {
  useCartViewQuery,
  useCompletePlaceOrderMutation,
  CartCountDocument,
  useUserDetailsQuery,
  Adjustment,
  PromotionAction,
  LineItem,
  useAddPromoCodeMutation,
  useRemovePromoCodeMutation,
} from 'generated/graphql-hooks';

import { Loader } from 'molecules/Loader';
import useCart from 'pages/cart/context/CartContext';

import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { Button } from 'molecules/Button';
import { ButtonText } from 'atoms/ButtonText';
import useVisibleState from 'hooks/useVisibleState';
import { logEventAnalytics } from 'utils/analytics';
import PromoCodeInput from 'organisms/PromoCodeInput';
import CartStageBreadCrum from 'pages/cart/atoms/CartStageBreadCrum';
import { getCartValuesFromData } from 'pages/cart/utils/getInitialValues';

import { DeliveryInfo } from '../DeliveryInfo';
import { CountHeading } from './atoms/CountHeading';
import { PaymentStage } from './PaymentStage/PaymentStage';
import { ConfirmStage } from './ConfirmStage/ConfirmStage';
import { DeliveryStage } from './DeliveryStage/DeliveryStage';
import { CharitableDonationList } from '../CharitableDonationList';

type AdjustmentType = Array<
  Pick<Adjustment, 'id' | 'amount'> & {
    source?: PromotionAction | null;
  }
>;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    width: '100%',
    maxWidth: '30rem',
    height: 'max-content',
    margin: 'auto',
  },
};

const CartView = () => {
  // information saved in context api
  const {
    state: {
      driverTip,
      stage,
      cartStage,
      shipmentPrice,
      nextDisable,
      nextLoading,
      card,
      cartTotal,
      insufficientStockLines,
      promoCode,
    },
    actions: { checkoutUpdate, updateCartState, restCart },
  } = useCart();

  const [addPromoCode, { loading: addLoading }] = useAddPromoCodeMutation();
  const [removePromoCode, { loading: removeLoading }] = useRemovePromoCodeMutation();

  const promoLoading = useMemo(() => addLoading || removeLoading, [addLoading, removeLoading]);

  const onPromoApply = useCallback(
    async (promo: string) => {
      if (promo.trim() && !promoCode) {
        // eslint-disable-next-line no-useless-catch
        try {
          const { data } = await addPromoCode({ variables: { input: { promoCode: promo } } });
          updateCartState({ promoCode: promo, cartTotal: data?.addPromoCode?.total });
        } catch (e) {
          return e;
        }
      }
      return null;
    },
    [addPromoCode, updateCartState, promoCode],
  );

  const onPromoRemove = useCallback(
    setFieldValue => async () => {
      const { data } = await removePromoCode({
        variables: { input: { promoCode: promoCode || '' } },
      });
      updateCartState({ promoCode: '', cartTotal: data?.removePromoCode?.total });
      setFieldValue('promocode', '');
    },
    [promoCode, removePromoCode, updateCartState],
  );

  // fetch cart information from qraphql
  const { loading, error, data, refetch } = useCartViewQuery({
    fetchPolicy: 'network-only',
    // after fetching information, save that in context api
    onCompleted(cartData) {
      updateCartState(getCartValuesFromData(cartData?.cart));
    },
  });

  // modal control for insufficient cart items
  const { visible, show, hide } = useVisibleState();

  useEffect(() => {
    // if items in the user cart is not available, show modal to alert user
    if (stage === 'cart' && insufficientStockLines?.length) {
      show();
    } else {
      // if items in the user cart is available again then hide alert modal
      hide();
    }
  }, [insufficientStockLines, stage, show, hide]);

  useEffect(() => {
    logEventAnalytics('view_cart');
  }, []);

  // user details required to check if user have supplier reward/loyalty card attached or not
  const { data: userDetails } = useUserDetailsQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    // move user back to cart stage every time user visits cart page
    // cart stages handled internally
    updateCartState({ stage: 'cart' });
  }, [updateCartState]);

  useEffect(() => {
    // if user doesn't have a cart for current order, show default card from user details
    if (userDetails && userDetails.me && userDetails?.me?.defaultCreditCard && !card) {
      updateCartState({ card: userDetails?.me?.defaultCreditCard });
    }
  }, [userDetails, card, updateCartState]);

  // required for remote sumbit for internal forms
  const formRef = useRef<any>();

  // final place order mutation
  const [checkoutComplete, { loading: completeLoading }] = useCompletePlaceOrderMutation();

  const { push } = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adjustments = useMemo(
    () =>
      data?.cart?.adjustments?.filter(
        adjustment =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      ) || [],
    [data],
  );

  const shipmentAdjustments = useMemo(
    () =>
      data?.cart?.shipmentAdjustments?.filter(
        adjustment =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      ) || [],
    [data],
  );

  const placeOrder = useCallback(async () => {
    try {
      const { data: purchaseData } = await checkoutComplete({
        variables: { input: {} },
        // After placeorder, empty the cart and redirect to the order detail.
        update(cache, { data: placeOrderResponse }) {
          if (placeOrderResponse?.checkoutComplete?.state === 'complete') {
            cache.writeQuery({
              query: CartCountDocument,
              data: { cart: null },
            });

            restCart();
          }
        },
      });

      // analytics
      const analyticsData: any = purchaseData?.checkoutComplete || {};
      logEventAnalytics(
        'purchase',
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

      push(`/order-confirmed/${purchaseData?.checkoutComplete?.id}`);
    } catch (e) {
      // if place order fails then update local data from backend
      checkoutUpdate();
    }
  }, [checkoutComplete, push, restCart, checkoutUpdate]);

  const handleNext = useCallback(() => {
    if (formRef?.current) {
      formRef.current?.handleSubmit();
    }
  }, []);

  // change error message depending on how many items in cart are unavailable
  const quantityErrorMessage = useMemo(() => {
    if (insufficientStockLines?.length) {
      // if single item is unavailable
      if (insufficientStockLines.length === 1) {
        return insufficientStockLines[0].product?.totalOnHand
          ? // if 1 item is available less then user required
            'product.maxquantity.error'
          : // if item is no quantiy in stock
            'product.noquantity.error';
      }
      // if multiple items are unavailable
      return 'product.some.unavaialable';
    }
    return undefined;
  }, [insufficientStockLines]);

  const onCheckoutClick = useCallback(
    async ({ promocode }) => {
      updateCartState({ nextLoading: true });
      const isError = await onPromoApply(promocode);

      if (!isError) {
        checkoutUpdate();
        const analyticsData: any = data?.cart || {};
        logEventAnalytics(
          'begin_checkout',
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
    },
    [checkoutUpdate, data, onPromoApply, updateCartState],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  if (data?.cart === null || data?.cart?.itemCount! === 0) {
    // if anytime it renders without data, it should redirect.
    return <Redirect to="/main/shop" />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorPage
        message="error.sorry"
        description="error.wrong"
        onRetry={refetch}
        title="try.again"
      />
    );
  }

  return (
    <Grid
      bg="offwhite.500"
      m="auto"
      pb="2rem"
      minHeight={{ xs: 'calc(100vh - 165px)', md: 'calc(100vh - 54px)' }}
      alignContent="start"
      gridTemplateRows="1fr"
    >
      {stage === 'cart' ? (
        <Formik initialValues={{ promocode: promoCode || '' }} onSubmit={onCheckoutClick}>
          {({ setFieldValue, handleSubmit }) => (
            <Form>
              <Box bg="white" pb="3rem" overflowY="auto">
                <Text
                  mb="0"
                  variant="title"
                  textAlign="center"
                  color="dirtyblue.900"
                  id={`cart.heading.${stage}` as LocaleString}
                />
                <CartStageBreadCrum onNext={handleNext} />
                <Box m="auto" width={{ md: '60%' }}>
                  <CountHeading count={data?.cart?.itemCount!} />
                  {data?.cart?.lineItems && <CartItemsList data={data?.cart.lineItems} />}
                  <Box px="1.6rem" borderBottom="1px solid" borderColor="pale.500" py={20} flex={1}>
                    <PromoCodeInput
                      loading={promoLoading}
                      onPromoApply={onPromoApply}
                      onPromoRemove={onPromoRemove(setFieldValue)}
                    />
                  </Box>
                  <CharitableDonationList />
                </Box>
              </Box>
              <CartPaymentTotal
                merchandiseSubTotal={data?.cart?.merchandiseTotal!}
                merchandiseTotal={data?.cart?.preTaxAmount!}
                shipping={shipmentPrice}
                deliveryTip={
                  driverTip?.amount !== undefined || cartStage === 'confirm'
                    ? Number(driverTip?.amount || 0)
                    : undefined
                }
                donation={data?.cart?.charitableContributionTotal}
                salestax={data?.cart?.salesTax}
                total={cartTotal || data?.cart?.total}
                adjustments={adjustments as AdjustmentType}
                shipmentAdjustments={shipmentAdjustments as AdjustmentType}
              />
              <Checkout
                totalPrice={cartTotal || (data?.cart?.total ?? 0)}
                onClick={handleSubmit}
                loading={nextLoading}
                disabled={!!quantityErrorMessage}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <Box bg="white" pb="3rem" overflowY="auto">
            <Text
              mb="0"
              variant="title"
              textAlign="center"
              color="dirtyblue.900"
              id={`cart.heading.${stage}` as LocaleString}
            />
            <CartStageBreadCrum onNext={handleNext} />
            {stage === 'address' && data?.cart && <DeliveryInfo formRef={formRef} />}
            {stage === 'delivery' && <DeliveryStage formRef={formRef} />}
            {stage === 'payment' && <PaymentStage formRef={formRef} />}
            {stage === 'confirm' && <ConfirmStage data={data?.cart} />}
          </Box>
          <CartPaymentTotal
            merchandiseSubTotal={data?.cart?.merchandiseTotal!}
            merchandiseTotal={data?.cart?.preTaxAmount!}
            shipping={shipmentPrice}
            deliveryTip={
              driverTip?.amount !== undefined || cartStage === 'confirm'
                ? Number(driverTip?.amount || 0)
                : undefined
            }
            donation={data?.cart?.charitableContributionTotal}
            salestax={data?.cart?.salesTax}
            total={cartTotal || data?.cart?.total}
            adjustments={adjustments as AdjustmentType}
            shipmentAdjustments={shipmentAdjustments as AdjustmentType}
          />
        </>
      )}
      {['confirm', 'address', 'delivery', 'payment'].includes(stage) && (
        <Box>
          {stage === 'confirm' ? (
            <PlaceOrder loading={completeLoading || nextLoading} onClick={placeOrder} />
          ) : (
            <Grid
              justifyItems="center"
              maxHeight="15rem"
              px="1.6rem"
              width={{ md: '50%', lg: '60%' }}
              mx="auto"
            >
              <Button
                type="button"
                onClick={handleNext}
                title="cart.placeorder.next"
                variant={nextDisable ? 'disabled' : undefined}
                disabled={nextDisable}
                loading={nextLoading}
              />
            </Grid>
          )}
        </Box>
      )}
      {visible && (
        <Modal
          isOpen
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={hide}
          shouldCloseOnOverlayClick={false}
        >
          <Text
            id="product.maxquantity.error.heading"
            variant="title"
            fontWeight="600"
            color="gray.900"
            my={0}
          />
          <Text
            id={quantityErrorMessage}
            variant="body"
            color="gray.900"
            lineHeight="2.2rem"
            values={{
              qty: insufficientStockLines?.[0]?.product?.totalOnHand || 0,
              name: insufficientStockLines?.[0]?.product?.name || '',
            }}
          />
          <Grid justifyContent="end">
            <ButtonText title="message.modal.ok" onClick={hide} />
          </Grid>
        </Modal>
      )}
    </Grid>
  );
};

export default CartView;
