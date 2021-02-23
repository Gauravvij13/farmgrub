import React from 'react';
import { Grid } from 'atoms/Grid';

import { Text } from 'atoms/Text';
import useGuest from '../../contexts/GuestContext';

export const GuestSigninButton = () => {
  const {
    actions: { setGuestRoute },
  } = useGuest();
  return (
    <Grid
      gridAutoFlow="column"
      justifyContent="center"
      alignItems="baseline"
      gridGap={{ xs: 2 }}
      mt={{ xs: 15 }}
      py={4}
    >
      <Text variant="field" color="mahogany.500" id="signup.signinmessage.already" />
      <Text
        variant="field"
        color="dirtyblue.500"
        textTransform="uppercase"
        fontWeight="bold"
        id="signup.signinbutton"
        cursor="pointer"
        onClick={() => setGuestRoute('signin')}
      />
    </Grid>
  );
};
