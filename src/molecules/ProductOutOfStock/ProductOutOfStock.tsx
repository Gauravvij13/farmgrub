import React from 'react';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { NavLink } from 'react-router-dom';

type ProductOutOfStockProps = {
  id: string;
};

export const ProductOutOfStock = ({ id }: ProductOutOfStockProps) => {
  return (
    <NavLink to={`/shop/products/${id}`}>
      <Grid position="absolute" height="100%" width="100%" top={0} alignItems="center">
        <Box
          position="absolute"
          height="100%"
          width="100%"
          top={0}
          bg="offwhite.1000"
          opacity={0.3}
          border="1px solid"
          borderColor="steelgrey.900"
          borderRadius="0.4rem"
        />
        <Text
          id="product.outofstock"
          variant="title"
          color="offwhite.0"
          textAlign="center"
          textShadow="2px 2px 5px #555"
        />
      </Grid>
    </NavLink>
  );
};
