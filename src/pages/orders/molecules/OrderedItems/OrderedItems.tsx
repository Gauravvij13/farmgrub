import React from 'react';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { Text } from 'atoms/Text';
import { Price } from 'atoms/Price';

type OrderedItemsProps = {
  image?: string | null;
  imageAlt?: string | null;
  imageTitle?: string | null;
  name?: string | null;
  amount?: string | number | null;
  quantity?: string | number | null;
};
export const OrderedItems = ({
  image,
  name,
  amount,
  quantity,
  imageAlt,
  imageTitle,
}: OrderedItemsProps) => {
  return (
    <Grid
      gridTemplateColumns="9rem 2fr "
      bg="offwhite.0"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="pale.500"
      pb={10}
    >
      <Image
        src={image}
        alt={imageAlt}
        title={imageTitle}
        width="8rem"
        height="8rem"
        objectfit="scale-down"
      />
      <Grid mx="1rem" gridGap={5}>
        <Text variant="body" my="0rem" color="steelgrey.500">
          {name}
        </Text>
        <Grid gridAutoFlow="column" justifyContent="start" alignItems="baseline" gridGap="0.5rem">
          <Text
            as="span"
            variant="body"
            color="steelgrey.500"
            my="0rem"
            id="order.detail.quantity"
          />
          <Text variant="body" my="0rem" color="steelgrey.500">
            {quantity}
          </Text>
        </Grid>
        <Price amount={amount} color="steelgrey.500" variant="small" my="0rem" />
      </Grid>
    </Grid>
  );
};
