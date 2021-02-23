import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';

type DeliveryDateProps = {
  deliveryDate?: string | null;
};

export const DeliveryDate = ({ deliveryDate }: DeliveryDateProps) => {
  return (
    <Grid
      pt="0.4rem"
      gridGap="0.4rem"
      justifyContent="start"
      alignItems="center"
      gridAutoFlow="column"
    >
      <Text variant="body" color="mahogany.500" my={0} py={0} id="orders.delivery.date" />
      {deliveryDate && (
        <Text
          variant="body"
          color="mahogany.500"
          fontWeight="bold"
          my={0}
          textTransform="capitalize"
        >
          {deliveryDate}
        </Text>
      )}
    </Grid>
  );
};
