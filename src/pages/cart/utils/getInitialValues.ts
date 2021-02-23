import { CartViewQuery, Payment, Adjustment } from 'generated/graphql-hooks';

export const getInitialValues = (data: CartViewQuery['cart'], paymentFormState: boolean) => {
  const initialValues = {
    address: {
      phone: '',
      streetAddress: '',
      zipCode: '',
      additionalInfo: '',
      city: '',
      lastAddressId: '',
    },
    paymentFormState,

    card: { cvv: '', name: '', expiry: '', number: '', cardId: '' },
    billing: { streetAddress: '', zipCode: '', city: '', lastAddressId: '' },
    deliveryDate: '',
    chipId: '',
    driverTip: '',
    instructions: '',
  };

  const userAddress = data?.shipAddress;
  const paymentDetails = data?.payments?.filter(payment => payment.state !== 'invalid')?.[0];

  if (paymentDetails) {
    initialValues.card.cardId = paymentDetails?.id!;
  }

  if (userAddress) {
    initialValues.address.phone = userAddress?.phone!;
    initialValues.address.streetAddress = userAddress?.address1!;
    initialValues.address.zipCode = userAddress?.zipcode!;
    initialValues.address.city = userAddress?.city!;
  }
  if (data?.billAddress) {
    initialValues.billing.streetAddress = data?.billAddress?.address1!;
    initialValues.billing.zipCode = data?.billAddress?.zipcode!;
    initialValues.billing.city = data?.billAddress?.city!;
  }

  return initialValues;
};

export const getCartValuesFromData = (data: any, updateCard: boolean = true) => {
  if (data) {
    const {
      shipAddress,
      billAddress,
      state,
      payments,
      shipmentTotal,
      shipments,
      driverTipTotal,
      shipmentAdjustments,
      lineItems,
      insufficientStockLines,
      specialInstructions,
      total,
      merchandiseTotal,
      adjustments,
    } = data;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename: bTypeName, ...billing } = billAddress || {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename: sTypeName, ...shipping } = shipAddress || {};

    const cardData = payments?.filter((payment: Payment) => payment.state !== 'invalid');
    const card = cardData?.length ? cardData?.[cardData.length - 1]?.source : undefined;

    const driverTipAdjustment = shipmentAdjustments?.find(
      (adjustment: Adjustment) => adjustment?.source?.__typename === 'DriverTip',
    );
    const driverTip = {
      amount: driverTipTotal ?? 0,
      driverTipStyle: driverTipAdjustment?.source.tipStyle ?? 'percent',
      driverTipId: driverTipAdjustment?.source.id ?? '1',
    };

    const promoCode =
      adjustments?.find(
        (adjustment: Adjustment) =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      )?.source?.promotion?.code || '';

    const deliveryDate = shipments?.[0]?.requestedDeliveryDate;
    const chipId = shipments?.[0]?.deliverySlot?.id;
    return {
      shipAddress: shipAddress ? shipping : undefined,
      billAddress: billAddress ? billing : undefined,
      cartStage: state,
      ...(updateCard && { card }),
      shipmentPrice: shipmentTotal,
      cartTotal: total,
      chipId,
      deliveryDate,
      tipAmount: driverTipTotal,
      merchandiseTotal,
      nextLoading: false,
      nextDisable: Boolean(insufficientStockLines?.length),
      driverTip: shipmentTotal !== undefined && !!driverTipAdjustment ? driverTip : undefined, // checking shipmentTotal because backend remove driver tip
      lineItems,
      insufficientStockLines,
      specialInstructions,
      promoCode,
    };
  }
  return {};
};
