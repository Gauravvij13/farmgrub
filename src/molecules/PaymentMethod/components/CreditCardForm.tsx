import React from 'react';
import { Grid } from 'atoms/Grid';
import { CartFormHeader } from 'pages/cart/organisms/CartView/atoms/CartFormHeader';
import { FormInput } from 'molecules/FormInput';
import { FormExpiryDateInput } from 'molecules/FormExpiryDateInput';
import { FormCardNumberInput } from 'molecules/FormCardNumberInput';

type CreditCardFormProps = {
  onClick?(isFormOpen: boolean): void;
  closeButton?: boolean;
};

const CreditCardForm = ({ onClick, closeButton }: CreditCardFormProps) => {
  return (
    <Grid gridGap={{ xs: 18 }} pb={10}>
      <CartFormHeader heading="payment.method" onClick={onClick} closeButton={closeButton} />
      <FormInput name="card.name" label="credit.card.user.name" type="text" />
      <FormCardNumberInput name="card.number" label="credit.card.number" inputMode="numeric" />

      <Grid gridGap={{ xs: 18 }} gridTemplateColumns="1fr 1fr">
        <FormExpiryDateInput name="card.expiry" label="credit.card.expiry" inputMode="numeric" />
        <FormInput
          name="card.cvv"
          label="credit.card.cvv"
          type="text"
          maxLength="4"
          inputMode="numeric"
        />
      </Grid>
    </Grid>
  );
};

export default CreditCardForm;
