import React, { MouseEvent } from 'react';
import { Grid } from 'atoms/Grid';
import { Box } from 'atoms/Box';
import { Icon } from 'molecules/Icon';
import { OrderStatus } from 'atoms/OrderStatus';

import { TotalPrice } from './atoms/TotalPrice';
import { OrderId } from './atoms/OrderId';
import { DeliveryDate } from './atoms/DeliveryDate';

export type OrderListItemProps = {
  orderId?: string | number | null;
  orderStatus?: string | null;
  price?: string | number | null;
  deliveryDate?: string | null;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};

export const OrderListItem = ({
  orderId,
  orderStatus,
  price,
  deliveryDate,
  onClick,
}: OrderListItemProps) => {
  return (
    <Grid
      pl="1.6rem"
      py="2.4rem"
      mb="0.2rem"
      bg="offwhite.0"
      gridAutoFlow="column"
      alignItems="center"
    >
      <Box>
        <OrderId orderId={orderId} />
        <OrderStatus status={orderStatus!} />
        <Box pt="1.6rem">
          <TotalPrice price={price} />
          {deliveryDate && <DeliveryDate deliveryDate={deliveryDate!} />}
        </Box>
      </Box>
      <Icon
        name="rightArrow"
        height={20}
        width={20}
        fill="mahogany.500"
        position="absolute"
        right="2rem"
        onClick={onClick}
      />
    </Grid>
  );
};
