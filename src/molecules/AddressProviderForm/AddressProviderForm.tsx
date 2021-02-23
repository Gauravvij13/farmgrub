import React from 'react';
import { Button } from 'molecules/Button';
import { Grid } from 'atoms/Grid';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormInput } from 'molecules/FormInput';
import * as yup from 'yup';
import { ApolloError } from 'apollo-boost';

import {
  validateRequiredZipcode,
  validateRequiredStreet,
  validateRequiredCity,
  validateRequiredState,
} from 'utils/validators';

export type FormValues = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

const initialValues: FormValues = {
  street: '',
  city: '',
  state: '',
  zip: '',
};

export const addressValidations = yup.object().shape({
  street: validateRequiredStreet(),
  city: validateRequiredCity(),
  state: validateRequiredState(),
  zip: validateRequiredZipcode(),
});

export type AddressProviderFormProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  /**
   * Handles loading state for the button.
   */
  loading?: boolean;
  error?: ApolloError;
};

export const AddressProviderForm = ({ onSubmit, loading }: AddressProviderFormProps) => {
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={addressValidations}>
      {() => {
        return (
          <Form>
            <Grid gridGap={18}>
              <FormInput name="street" label="addressform.label.street" autoFocus />
              <Grid gridTemplateColumns="2fr 1fr" gridGap={5}>
                <FormInput name="city" label="addressform.label.city" />
                <FormInput name="state" label="addressform.label.state" />
              </Grid>
              <FormInput name="zip" label="addressform.label.zip" />
              <Button
                type="submit"
                title="addressform.buttontext"
                mt="1rem"
                mb="2rem"
                loading={loading}
              />
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
