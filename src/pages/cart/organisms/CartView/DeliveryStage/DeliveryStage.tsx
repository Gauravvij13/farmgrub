import React, { FC, useCallback, useMemo, useEffect } from 'react';
import { Formik, Form } from 'formik';

import { Grid } from 'atoms/Grid';
import { Loader } from 'molecules/Loader';
import useCart from 'pages/cart/context/CartContext';
import { DeliveryInstruction } from 'molecules/DeliveryInstruction';
import { useDeliverySlotsQuery, useCartViewQuery } from 'generated/graphql-hooks';
import { onSelectParams, DeliverySlotsList } from 'pages/cart/molecules/DeliverySlotsList';
import { isValid, format } from 'date-fns/esm';
import { isPast } from 'date-fns';

export type DeliveryStageProps = {
  formRef: any;
};

export const DeliveryStage: FC<DeliveryStageProps> = ({ formRef }) => {
  const { loading, data } = useDeliverySlotsQuery({
    fetchPolicy: 'network-only',
  });
  const { data: cartData } = useCartViewQuery({ fetchPolicy: 'cache-only' });

  const {
    state: { deliveryDate: selectedDate, chipId: selectedId, specialInstructions, shipmentPrice },
    actions: { updateCartState, setShipmentPrice, checkoutUpdate },
  } = useCart();

  // original total from backend to calculate driver tip
  const staticCartTotal = useMemo<number>(
    () => (cartData?.cart?.total || 0) - (cartData?.cart?.driverTipTotal || 0),
    [cartData],
  );

  const amount = useMemo(() => data?.shipmentMethod[0]?.calculator?.deliveryFee || 0, [data]);

  const handleDeliverySelect = useCallback(
    ({ deliveryDate, chipId }: onSelectParams) => {
      updateCartState({
        deliveryDate,
        chipId: Number(chipId),
        ...(shipmentPrice === 0 && {
          cartTotal:
            staticCartTotal +
            // eslint-disable-next-line no-restricted-globals
            (amount && !isNaN(amount) && Number(amount) >= 0 ? Number(amount) : 0),
        }),
      });
      setShipmentPrice(amount);
    },
    [setShipmentPrice, updateCartState, staticCartTotal, shipmentPrice, amount],
  );

  useEffect(() => {
    if (shipmentPrice === 0) {
      updateCartState({
        shipmentPrice: amount,
        cartTotal:
          staticCartTotal +
          // eslint-disable-next-line no-restricted-globals
          (amount && !isNaN(amount) && Number(amount) >= 0 ? Number(amount) : 0),
      });
    }
  }, [updateCartState, shipmentPrice, amount, staticCartTotal]);

  useEffect(() => {
    updateCartState({ nextDisable: false });
  }, [updateCartState]);

  const deliverySlot = useMemo(() => {
    const now = new Date();
    const currentYear = format(now, 'yy');
    if (selectedDate && selectedId && !isPast(new Date(selectedDate))) {
      const date = new Date(`${selectedDate} ${currentYear}`);
      return {
        deliveryDate: isValid(date) ? format(date, 'yyyy-MM-dd') : selectedDate,
        chipId: selectedId,
      };
    }

    const shipmentSlot = data?.shipmentMethod[0]?.deliveryToday?.deliverySlots
      ? data?.shipmentMethod[0]?.deliveryToday
      : data?.shipmentMethod[0]?.deliveryTomorrow;

    if (shipmentSlot) {
      return {
        deliveryDate: shipmentSlot?.date!,
        chipId: Array.isArray(shipmentSlot?.deliverySlots)
          ? shipmentSlot?.deliverySlots[0]?.id!
          : '',
      };
    }
    return { deliveryDate: '', chipId: '' };
  }, [data, selectedDate, selectedId]);

  const handleSubmit = useCallback(
    values => {
      checkoutUpdate({
        delivery: { date: values.deliveryDate, slotId: values.chipId },
        specialInstructions: values.specialInstructions,
      });
    },
    [checkoutUpdate],
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Formik
      innerRef={formRef}
      onSubmit={handleSubmit}
      initialValues={{ specialInstructions: specialInstructions || '', ...deliverySlot }}
    >
      {() => (
        <Form>
          <Grid width={{ xs: '100%', md: '50%', lg: '60%' }} m="auto" p={10}>
            <DeliverySlotsList
              shipmentMethods={data?.shipmentMethod!}
              onSelect={handleDeliverySelect}
            />
            <DeliveryInstruction />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
