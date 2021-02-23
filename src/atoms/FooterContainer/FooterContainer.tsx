import React, { FC } from 'react';
import { Grid } from 'atoms/Grid';

type FooterContainerProps = {
  children?: React.ReactNode;
};
export const FooterContainer: FC<FooterContainerProps> = ({ children }) => {
  return (
    <Grid
      bg="offwhite.500"
      gridAutoFlow="column"
      justifyContent="center"
      alignItems="baseline"
      gridGap={{ xs: 2 }}
      mt={{ xs: 15 }}
      py={4}
    >
      {children || null}
    </Grid>
  );
};
