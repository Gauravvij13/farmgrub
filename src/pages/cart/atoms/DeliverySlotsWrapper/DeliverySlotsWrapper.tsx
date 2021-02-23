import React, { FC } from 'react';
import { useFormikContext } from 'formik';

import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { DeliverySlots } from 'molecules/DeliverySlots';
import { ShipmentMethod } from 'generated/graphql-hooks';

export type DeliverySlotsWrapperProps = {
  day: 'today' | 'tomorrow';
  handleDeliveryChipClick: any;
  deliverySlots?: ShipmentMethod['deliveryToday'];
};

export const DeliverySlotsWrapper: FC<DeliverySlotsWrapperProps> = ({
  deliverySlots,
  handleDeliveryChipClick,
  day,
}) => {
  const { values } = useFormikContext();

  if (
    deliverySlots &&
    Array.isArray(deliverySlots?.deliverySlots) &&
    deliverySlots?.deliverySlots?.length > 0
  ) {
    return (
      <DeliverySlots
        heading={deliverySlots?.displayTitle!}
        timeSlots={deliverySlots?.deliverySlots!}
        selectedChipId={values.chipId}
        date={deliverySlots?.date}
        selectedDate={values.deliveryDate}
        onSelect={handleDeliveryChipClick(deliverySlots?.date!)}
      />
    );
  }

  return (
    <Text
      color="mahogany.500"
      variant="body"
      px="5.4rem"
      textAlign="center"
      id={`delivery.${day}.slots.notavailable` as LocaleString}
    />
  );
};
