import React from 'react';
import { Grid } from 'atoms/Grid';
import { FormInput } from 'molecules/FormInput';
import { CartFormHeader } from 'pages/cart/organisms/CartView/atoms/CartFormHeader';

type BillingAddressFormProps = {
  onClick?(isFormOpen: boolean): void;
  closeButton?: boolean;
};

const BillingAddressForm = ({ onClick, closeButton }: BillingAddressFormProps) => {
  return (
    <Grid gridGap={{ xs: 18 }} pb={10}>
      <CartFormHeader
        heading="billing.address.heading"
        onClick={onClick}
        closeButton={closeButton}
      />
      <FormInput name="billAddress.address1" label="billing.street.address" type="text" />
      <FormInput name="billAddress.city" label="billing.city" type="text" />
      <FormInput
        name="billAddress.zipcode"
        label="billing.address.zipcode"
        type="text"
        inputMode="numeric"
      />
    </Grid>
  );
};

export default BillingAddressForm;
