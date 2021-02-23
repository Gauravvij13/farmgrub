import React, { FC } from 'react';
import { PurchasableProductListItem } from 'molecules/PurchasableProductListItem';
import { Grid } from 'atoms/Grid';
import { Box } from 'atoms/Box';
import { Product } from 'generated/graphql-hooks';
import { ProductGridHeader } from './atoms/ProductGridHeader';

type ProductGridProps = {
  products: Array<Partial<Product>>;
  heading: string;
};

export const ProductGrid: FC<ProductGridProps> = ({ products, heading }) => {
  return (
    <Box bg="offwhite.0" mb={10}>
      <Grid px="1.5rem" paddingTop="1.5rem" gridRowGap="1rem">
        <ProductGridHeader heading={heading} />
        <Grid
          gridTemplateColumns="repeat(auto-fit,minmax(130px,min-content))"
          gridGap="2rem"
          justifyContent={{ xs: 'space-evenly', sm: 'start' }}
          gridColumnGap="0.8rem"
        >
          {products?.map(product => (
            <PurchasableProductListItem key={product.id!} product={product} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
