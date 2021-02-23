import React from 'react';
import { Grid } from 'atoms/Grid';
import { OrderedItems } from 'pages/orders/molecules/OrderedItems';
import { LineItem } from 'generated/graphql-hooks';

type OrderItemListType = {
  data?: Array<Partial<LineItem>> | null;
};

export const OrderItemList = ({ data }: OrderItemListType) => {
  return (
    <Grid gridGap={10}>
      {Array.isArray(data) &&
        data.map(lineItem => (
          <OrderedItems
            image={
              Array.isArray(lineItem?.product?.images)
                ? lineItem?.product?.images[0]?.thumbnail
                : null
            }
            imageAlt={lineItem?.product?.images?.[0]?.altText}
            imageTitle={lineItem?.product?.images?.[0]?.title}
            key={lineItem.id!}
            name={lineItem?.product?.name}
            quantity={lineItem?.quantity}
            amount={lineItem?.product?.amount}
          />
        ))}
    </Grid>
  );
};
