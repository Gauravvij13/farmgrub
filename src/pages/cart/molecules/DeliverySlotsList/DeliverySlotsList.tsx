import React, { FC, useCallback } from 'react';
import { ShipmentMethod } from 'generated/graphql-hooks';
import { useFormikContext } from 'formik';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import DeliverySlotsWrapper from 'pages/cart/atoms/DeliverySlotsWrapper';

export type onSelectParams = {
  deliveryDate: string;
  chipId: string;
};

type DeliverySlotsListProps = {
  onSelect?: (params: onSelectParams) => void;
  shipmentMethods: ShipmentMethod[];
};

export const DeliverySlotsList: FC<DeliverySlotsListProps> = ({ shipmentMethods, onSelect }) => {
  const { setFieldValue } = useFormikContext();

  const handleDeliveryChipClick = useCallback(
    (deliveryDate: string) => (chipId: string) => {
      if (typeof onSelect === 'function') {
        onSelect({ deliveryDate, chipId });
      }
      setFieldValue('deliveryDate', deliveryDate);
      setFieldValue('chipId', chipId);
    },
    [onSelect, setFieldValue],
  );

  if (Array.isArray(shipmentMethods) && shipmentMethods.length > 0) {
    return (
      <>
        {shipmentMethods.map(({ id, deliveryToday, deliveryTomorrow, interrimHolidays }) => (
          <Box key={id!}>
            {Number(interrimHolidays?.length) > 0 && (
              <Grid color="gray.400" fontWeight="600" alignItems="center" mb="1.3rem">
                <Text
                  id="delivery.interrimholidays.alert"
                  variant="body"
                  as="span"
                  lineHeight="2rem"
                  fontWeight="600"
                />
                <Grid justifySelf="center" mt="1.5rem" textAlign="center">
                  {interrimHolidays?.map(holiday => (
                    <Text variant="body" as="span" my="0.2rem">
                      {holiday}
                    </Text>
                  ))}
                </Grid>
              </Grid>
            )}
            <DeliverySlotsWrapper
              day="today"
              deliverySlots={deliveryToday}
              handleDeliveryChipClick={handleDeliveryChipClick}
            />
            <DeliverySlotsWrapper
              day="tomorrow"
              deliverySlots={deliveryTomorrow}
              handleDeliveryChipClick={handleDeliveryChipClick}
            />
          </Box>
        ))}
      </>
    );
  }
  return (
    <Text
      color="mahogany.500"
      variant="body"
      px="5.4rem"
      textAlign="center"
      id="delivery.slots.notavailable"
    />
  );
};
