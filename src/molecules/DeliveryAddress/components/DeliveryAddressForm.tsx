import React from 'react';
import { Grid } from 'atoms/Grid';
import { CartFormHeader } from 'pages/cart/organisms/CartView/atoms/CartFormHeader';
import { FormInput } from 'molecules/FormInput';
import { FormPhoneInput } from 'molecules/FormPhoneInput';

type DeliveryAddressFormProps = {
  onClick?(isFormOpen: boolean): void;
  closeButton?: boolean;
};

export const DeliveryAddressForm = ({ onClick, closeButton }: DeliveryAddressFormProps) => {
  return (
    <>
      <Grid gridGap={{ xs: 10 }} py={{ xs: 11 }} borderBottom="1px solid" borderColor="pale.500">
        <Grid gridTemplateRows="auto auto" gridGap={{ xs: 18 }}>
          <CartFormHeader
            heading="delivery.address.heading"
            onClick={onClick}
            closeButton={closeButton}
          />
          <FormInput name="shipAddress.address1" label="delivery.street.address" type="text" />
          <FormInput name="shipAddress.city" label="delivery.city" type="text" />
          <FormInput
            name="shipAddress.zipcode"
            label="delivery.zipcode"
            type="text"
            maxLength="5"
            inputMode="numeric"
          />
          <FormPhoneInput name="shipAddress.phone" label="delivery.phone" />
        </Grid>
      </Grid>
    </>
  );
};
export default DeliveryAddressForm;
