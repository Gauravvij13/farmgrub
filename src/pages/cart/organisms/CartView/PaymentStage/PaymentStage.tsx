import React, { FC, useCallback, useMemo } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { DriverTips } from 'organisms/DriverTips';
import useCart from 'pages/cart/context/CartContext';
import { PaymentMethod } from 'molecules/PaymentMethod';
import {
  validateRequiredCardCvv,
  validateRequiredCardNumber,
  validateRequiredCardExpiry,
  validateRequiredCardName,
} from 'utils/validators';
import PromoCodeInput from 'organisms/PromoCodeInput';
import { useAddPromoCodeMutation, useRemovePromoCodeMutation } from 'generated/graphql-hooks';

import { submitPayment } from '../utils/SubmitData';

export const paymentValidationSchema = yup.object().shape({
  /**
   * paymentFormState is a variable set through cart context on basis of the state of edit payment card form visible or not.
   * card validation differ on basis of  paymentFormState.
   */
  card: yup
    .object()
    .shape({
      cvv: yup.string(),
      name: yup.string(),
      number: yup.string(),
      expiry: yup.string(),
      cardId: yup.string(),
    })
    // paymentFormState differentiate the validations of payment card details form.

    .when(['paymentFormState'], {
      is: paymentFormState => {
        return paymentFormState;
      },

      // paymentFormState comes true then it required the form.
      then: yup.object().shape({
        cvv: validateRequiredCardCvv(),
        name: validateRequiredCardName(),
        number: validateRequiredCardNumber(),
        expiry: validateRequiredCardExpiry(),
      }),

      // paymentFormState comes false then it notRequired the form.
      otherwise: yup
        .object()
        .shape({
          cvv: yup.string().notRequired(),
          name: yup.string().notRequired(),
          number: yup.string().notRequired(),
          expiry: yup.string().notRequired(),
        })
        .notRequired(),
    }),
  driverTip: yup.object().shape({
    amount: yup
      .number()
      .min(0, 'drivertip.invalidamount')
      .required('required')
      .typeError('drivertip.invalidamount'),
  }),
});

export type PaymentStageProps = {
  formRef: any;
};

export const PaymentStage: FC<PaymentStageProps> = ({ formRef }) => {
  const {
    state: { card, driverTip, promoCode },
    actions: { getStripeToken, addDriverTipOrder, updateCartState, checkoutUpdate },
  } = useCart();

  const [addPromoCode, { loading: addLoading }] = useAddPromoCodeMutation();
  const [removePromoCode, { loading: removeLoading }] = useRemovePromoCodeMutation();

  const loading = useMemo(() => addLoading || removeLoading, [addLoading, removeLoading]);

  const onPromoApply = useCallback(
    async (promo: string) => {
      if (promo.trim() && !promoCode) {
        // eslint-disable-next-line no-useless-catch
        try {
          await addPromoCode({ variables: { input: { promoCode: promo } } });
          updateCartState({ promoCode: promo });
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
      await removePromoCode({ variables: { input: { promoCode: promoCode || '' } } });
      updateCartState({ promoCode: '' });
      setFieldValue('promocode', '');
    },
    [promoCode, removePromoCode, updateCartState],
  );

  const handleSubmit = useCallback(
    async ({ card: { expiry, id, ...rest }, driverTip: driverTipTotal, promocode: promo }) => {
      updateCartState({ nextLoading: true });
      const isError = await onPromoApply(promo);

      if (!isError) {
        const expMonth = expiry.substr(0, 2);
        const expYear = expiry.substr(2, 2);

        try {
          let data = { id: '' };
          if (rest.number) {
            data = await getStripeToken({ ...rest, expMonth, expYear });
          }
          await addDriverTipOrder(driverTipTotal);
          updateCartState({ nextLoading: false });
          await checkoutUpdate(submitPayment(id, { id: data?.id }));
        } catch (e) {
          updateCartState({ nextLoading: false });
        }
      } else {
        updateCartState({ nextLoading: false });
      }
    },
    [getStripeToken, addDriverTipOrder, updateCartState, checkoutUpdate, onPromoApply],
  );

  return (
    <Grid width={{ xs: '100%', md: '50%', lg: '60%' }} m="auto" p={10} pb={0}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          card: { name: '', number: '', cvv: '', expiry: '', id: card?.id || '' },
          driverTip,
          promocode: promoCode || '',
        }}
        innerRef={formRef}
        validationSchema={paymentValidationSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <Box borderBottom="1px solid" borderColor="pale.500" pb={20} flex={1}>
              <PromoCodeInput
                loading={loading}
                onPromoApply={onPromoApply}
                onPromoRemove={onPromoRemove(setFieldValue)}
              />
            </Box>
            <Grid gridGap={10} pt={11}>
              <DriverTips />
              <PaymentMethod
                isEditable={!!card}
                cardType={card?.ccType}
                number={card?.lastDigits}
              />
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
