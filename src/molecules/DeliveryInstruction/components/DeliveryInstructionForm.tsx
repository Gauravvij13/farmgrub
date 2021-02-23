import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';

const DeliveryInstructionForm = () => {
  return (
    <Grid gridGap={{ xs: 10 }} py={{ xs: 11 }}>
      <Text
        as="h3"
        variant="body"
        id="delivery.additional.information.heading"
        color="steelgrey.500"
      />
      <FormInput name="specialInstructions" label="delivery.additional.instruction" type="text" />
    </Grid>
  );
};

export default DeliveryInstructionForm;
