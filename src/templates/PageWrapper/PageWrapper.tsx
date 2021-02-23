import React, { FC } from 'react';
import { Grid } from 'atoms/Grid';

export const PageWrapper: FC = ({ children }) => {
  return (
    <Grid justifySelf="center" minHeight="100vh" alignItems="center" px={{ xs: 16 }}>
      <Grid gridGap={18} width={{ md: '60%' }} m={{ md: 'auto' }}>
        {children || null}
      </Grid>
    </Grid>
  );
};
