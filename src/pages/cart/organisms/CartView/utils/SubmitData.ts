import { CartFormValues } from 'typings/cartitems';
import { CartStages } from 'pages/cart/context/CartContext';

export const submitAddress = (values: CartFormValues) => {
  return {
    billAddress: {
      address1: values?.billing?.streetAddress!,
      city: values?.billing?.city!,
      zipcode: values?.billing?.zipCode!,
      phone: values?.billing?.phone! || values?.address?.phone!,
    },
    shipAddress: {
      address1: values?.address?.streetAddress!,
      city: values?.address?.city!,
      zipcode: values?.address?.zipCode!,
      phone: values?.address?.phone!,
    },
  };
};

export const submitDelivery = (values: CartFormValues) => {
  return {
    specialInstructions: values?.address.additionalInfo!,
    delivery: {
      date: values?.deliveryDate,
      slotId: values?.chipId!,
    },
  };
};

export const submitPayment = (existingcardId: string, stripeToken: { id?: string }) => {
  return {
    payment: {
      ...(stripeToken.id && { stripeToken: stripeToken?.id! }),
      ...(existingcardId && { cardId: existingcardId }),
    },
  };
};

export const checkDisabled = (state: CartStages, values: CartFormValues, errors: any): boolean => {
  if (
    state === 'address' &&
    (!values?.address ||
      errors.address ||
      errors.billing ||
      !values?.address.streetAddress ||
      !values?.address.city ||
      !values?.address?.zipCode ||
      !values?.address?.phone ||
      !values?.billing ||
      !values?.billing?.streetAddress ||
      !values?.billing?.city ||
      !values?.billing?.zipCode)
  ) {
    return true;
  }
  if (
    state === 'payment' &&
    values?.paymentFormState &&
    (!values?.card.name ||
      !values?.card.expiry ||
      !values?.card.cvv ||
      !values?.card.number ||
      errors.card)
  ) {
    return true;
  }
  return false;
};
