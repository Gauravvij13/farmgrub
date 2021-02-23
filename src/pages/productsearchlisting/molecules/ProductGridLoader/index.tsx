import React from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { ProductLoader } from 'molecules/ProductListLoader';

export const ProductGridLoader = () => {
  return (
    <Box bg="offwhite.0" pt="4.2rem">
      <Grid px="1.5rem" paddingTop="1.5rem" gridRowGap="1rem">
        <Grid
          gridTemplateColumns="repeat(auto-fit,minmax(130px,min-content))"
          gridGap="2rem"
          justifyContent={{ xs: 'space-evenly', sm: 'start' }}
          gridColumnGap="0.8rem"
        >
          {Array(24)
            .fill(0)
            .map((_, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <ProductLoader key={index} />;
            })}
        </Grid>
      </Grid>
    </Box>
  );
};
