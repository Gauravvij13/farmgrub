import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { NavLink } from 'react-router-dom';

export const TermsServices = () => {
  return (
    <Grid gridAutoFlow="column" justifyContent="center" alignItems="baseline" gridGap={2}>
      <Text as="p" variant="small" color="mahogany.500" id="term.services" />
      <NavLink to="/terms-of-services" style={{ textDecoration: 'none' }}>
        <Text as="span" variant="small" color="dirtyblue.500" id="term.services.link" />
      </NavLink>
    </Grid>
  );
};
