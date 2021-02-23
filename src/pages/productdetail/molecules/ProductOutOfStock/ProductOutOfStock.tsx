import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';

export const ProductOutOfStock = () => {
  return (
    <Grid width="100%" height="6.4rem" alignItems="center" m="auto" bg="offwhite.500">
      <Text
        id="product.outofstock"
        color="darklavender.500"
        textAlign="center"
        variant="heading"
        fontWeight="medium"
      />
    </Grid>
  );
};
