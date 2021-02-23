import React, { useEffect, useCallback } from 'react';
import { useFormikContext } from 'formik';

import { Box } from 'atoms/Box';
import useCart from 'pages/cart/context/CartContext';
import { EditableInfo } from 'pages/cart/organisms/CartView/atoms/EditableField/EditableInfo';
import { CartFormValues } from 'typings/cartitems';
import CreditCardForm from './components/CreditCardForm';

type PaymentMethodProps = {
  isEditable?: boolean;
  number?: string | null;
  cardType?: string | null;
};

export const PaymentMethod = ({ isEditable, number, cardType }: PaymentMethodProps) => {
  const { values, setValues, setFieldValue } = useFormikContext<CartFormValues>();
  const {
    state: { paymentFormState },
    actions: { setPaymentFormState },
  } = useCart();

  useEffect(() => {
    setPaymentFormState(!isEditable);
  }, [isEditable, setPaymentFormState]);

  const closeForm = useCallback(() => {
    setPaymentFormState(false);
    setValues({
      ...values,
      card: { cvv: '', name: '', expiry: '', number: '', cardId: values.card.cardId },
    });
  }, [setPaymentFormState, setValues, values]);

  useEffect(() => {
    setFieldValue('paymentFormState', paymentFormState);
  }, [paymentFormState, setFieldValue]);

  return (
    <Box>
      {paymentFormState ? (
        <CreditCardForm onClick={closeForm} closeButton={isEditable} />
      ) : (
        <EditableInfo
          subDetail={`${cardType} XXXXX${number}`}
          heading="payment.method"
          alignment="horizontal"
          showCardIcon
          onClick={() => setPaymentFormState(true)}
        />
      )}
    </Box>
  );
};
