import { useCallback, useReducer, useEffect } from 'react';
import { createContainer, createReducer, createAction } from 'utils/context';
import axios from 'axios';
import { useIntl } from 'react-intl';
import {
  Address,
  MutationCheckoutUpdateArgs,
  useUpdatePlaceOrderMutation,
  useNextPlaceOrderMutation,
  Payment,
  useAddDriverTipMutation,
  CreditCard,
  LineItem,
} from 'generated/graphql-hooks';

import { cartProgressAnalytics } from 'utils/analytics';
import env from '../../../env';
import { getCartValuesFromData } from '../utils/getInitialValues';

export type CartStages = 'cart' | 'address' | 'delivery' | 'payment' | 'confirm' | 'complete';

export type CardData = {
  name: string;
  number: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

export type CartContext = {
  stage: CartStages;
  cartStage: CartStages;
  shipmentPrice: number | null;
  paymentFormState: boolean;
  driverTip?: Record<string, string | number>;
  nextDisable: boolean;
  cartTotal?: number;
  nextLoading: boolean;
  shipAddress?: Address | null;
  billAddress?: Address | null;
  card?: Omit<CreditCard, 'default' | 'payments'> | null;
  specialInstructions?: string | null;
  deliveryDate?: string;
  chipId?: number;
  merchandiseTotal: number;
  lineItems?: Array<LineItem>;
  insufficientStockLines?: Array<LineItem>;
  promoCode?: string;
};

export type StripeTokenResponse = {
  id: string;
  object: 'token';
  card: Payment;
  livemode: boolean;
};

const initialState: CartContext = {
  stage: 'cart',
  cartStage: 'cart',
  shipmentPrice: null,
  merchandiseTotal: 0,
  paymentFormState: false,
  nextDisable: false,
  nextLoading: false,
};

const actions = {
  checkout: createAction('CHECKOUT'),
  placeOrderLoadState: createAction('PLACEORDERLOADSTATE'),
  shipmentPrice: createAction('SHIPMENTPRICE'),
  paymentFormState: createAction('PAYMENTFORMSTATE'),
  driverTip: createAction('DRIVERTIP'),
  updateField: createAction('CART_UPDATE_FIELD'),
  resetCart: createAction('CART_RESET'),
  addToCartTotal: createAction('ADD_TO_CART_TOTAL'),
};

const authReducer = createReducer<CartContext>({
  [actions.checkout.toString()]: (state, { payload }) => ({
    ...state,
    stage: payload,
  }),
  [actions.shipmentPrice.toString()]: (state, { payload }) => ({
    ...state,
    shipmentPrice: payload,
  }),
  [actions.paymentFormState.toString()]: (state, { payload }) => ({
    ...state,
    paymentFormState: payload,
  }),
  [actions.addToCartTotal.toString()]: (state, { payload }) => ({
    ...state,
    cartTotal: (state.cartTotal || 0) + payload,
  }),
  [actions.driverTip.toString()]: (state, { payload }) => ({
    ...state,
    driverTip: {
      amount: payload.amount,
      driverTipStyle: payload.driverTipStyle,
      driverTipId: payload.id,
    },
  }),
  [actions.updateField.toString()]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [actions.resetCart.toString()]: () => ({
    ...initialState,
  }),
});

export const { useContext: useCart, Provider: CartProvider } = createContainer(() => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const intl = useIntl();

  const [
    fetchNextStepMutation,
    { data: nextData, loading: nextLoading },
  ] = useNextPlaceOrderMutation();

  const [
    updatePlaceOrder,
    { data: updateData, loading: updateLoading },
  ] = useUpdatePlaceOrderMutation();

  const [addDriverTip, { loading: driverTipLoading }] = useAddDriverTipMutation();

  useEffect(() => {
    dispatch(
      actions.updateField({ nextLoading: nextLoading || updateLoading || driverTipLoading }),
    );
  }, [nextLoading, updateLoading, driverTipLoading]);

  useEffect(() => {
    if (nextData?.checkoutNext) {
      dispatch(
        actions.updateField({
          ...getCartValuesFromData(
            nextData?.checkoutNext,
            Boolean(nextData?.checkoutNext?.payments?.length),
          ),
          stage: nextData?.checkoutNext?.state,
        }),
      );

      // just for analytics
      const data = nextData?.checkoutNext || {};
      cartProgressAnalytics(
        data.state || 'cart',
        data.total,
        data.lineItems?.map(l => ({
          item_id: l.id || '',
          id: l.id || '',
          quantity: l.quantity || 0,
          price: Number(l.price || 0),
          item_name: l.product?.name || '',
          name: l.product?.name || '',
        })) || [],
      );
    }
  }, [nextData]);

  useEffect(() => {
    if (updateData?.checkoutUpdate) {
      if (state?.stage === updateData?.checkoutUpdate?.state && state?.stage !== 'confirm') {
        fetchNextStepMutation({ variables: { input: {} } });
      } else {
        dispatch(
          actions.updateField({
            ...getCartValuesFromData(
              updateData?.checkoutUpdate,
              Boolean(updateData?.checkoutUpdate?.payments?.length),
            ),
            stage: updateData?.checkoutUpdate?.state,
          }),
        );
      }
    }
    // eslint-disable-next-line
  }, [updateData, fetchNextStepMutation]);

  const handleCheckout = useCallback((stage: CartStages) => {
    dispatch(actions.checkout(stage));
  }, []);

  const setShipmentPrice = useCallback((shipmentPrice: CartContext['shipmentPrice']) => {
    dispatch(actions.shipmentPrice(shipmentPrice));
  }, []);

  const setPaymentFormState = useCallback((paymentFormState: CartContext['paymentFormState']) => {
    dispatch(actions.paymentFormState(paymentFormState));
  }, []);

  const setDriverTip = useCallback((driverTip: CartContext['driverTip']) => {
    dispatch(actions.driverTip(driverTip));
  }, []);

  const updateCartState = useCallback((values: Partial<CartContext>) => {
    dispatch(actions.updateField(values));
  }, []);

  const checkoutNext = useCallback(() => {
    if (state.cartStage !== 'confirm' && state.stage !== 'confirm') {
      fetchNextStepMutation({ variables: { input: {} } });
    }
  }, [fetchNextStepMutation, state.stage, state.cartStage]);

  const checkoutUpdate = useCallback(
    async (values?: MutationCheckoutUpdateArgs['input']) => {
      try {
        await updatePlaceOrder({
          variables: {
            input: {
              ...values,
            },
          },
        });
      } catch (e) {}
    },
    [updatePlaceOrder],
  );

  const addDriverTipOrder = useCallback(
    async driverTip => {
      await addDriverTip({
        variables: {
          input: {
            driverTip: {
              id: driverTip.driverTipId.toString(),
              ...(driverTip.driverTipStyle !== 'percent' && {
                customAmount: Number(driverTip.amount),
              }),
            },
          },
        },
      });
    },
    [addDriverTip],
  );

  const addToCartTotal = useCallback((amount?: number | null) => {
    dispatch(
      // eslint-disable-next-line no-restricted-globals
      actions.addToCartTotal(amount && !isNaN(amount) && Number(amount) >= 0 ? Number(amount) : 0),
    );
  }, []);

  const restCart = useCallback(() => {
    dispatch(actions.resetCart());
  }, []);

  const getStripeToken = useCallback(
    async (cardDetails: CardData) => {
      const CardData = new URLSearchParams();
      CardData.append('card[name]', cardDetails.name);
      CardData.append('card[number]', cardDetails.number);
      CardData.append('card[exp_month]', cardDetails.expMonth);
      CardData.append('card[exp_year]', cardDetails.expYear);
      CardData.append('card[cvc]', cardDetails.cvv);
      try {
        const { data } = await axios.post<StripeTokenResponse>(
          'https://api.stripe.com/v1/tokens',
          CardData,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${env.STRIPE_KEY}`,
            },
          },
        );
        if (data && data.id) {
          return data;
        }

        throw new Error(intl.formatMessage({ id: 'error.unkown' }));
      } catch (e) {
        if (e.response?.status === 402) {
          // showError(e?.response?.data?.error?.message);
          throw new Error(intl.formatMessage({ id: 'placeorder.card.isnotvalid' }));
        }

        throw new Error(e);
      }
    },
    [intl],
  );

  return {
    state,
    actions: {
      handleCheckout,
      getStripeToken,
      setShipmentPrice,
      setPaymentFormState,
      checkoutUpdate,
      checkoutNext,
      addDriverTipOrder,
      setDriverTip,
      updateCartState,
      addToCartTotal,
      restCart,
    },
  };
});
export const useCartStage = () => useCart().state.stage;
export default useCart;
