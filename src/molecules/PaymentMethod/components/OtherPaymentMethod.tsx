import React from 'react';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { NavLink } from 'react-router-dom';

const OtherPaymentMethod = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr">
      <NavLink to="">
        <Image
          // eslint-disable-next-line global-require
          src={require('../../../assets/images/paypal.jpg')}
          alt="paypal"
          height="5rem"
          objectfit="scale-down"
        />
      </NavLink>
      <NavLink to="">
        <Image
          // eslint-disable-next-line global-require
          src={require('../../../assets/images/g-pay.jpg')}
          alt="g pay"
          height="5rem"
          objectfit="scale-down"
        />
      </NavLink>
    </Grid>
  );
};

export default OtherPaymentMethod;
