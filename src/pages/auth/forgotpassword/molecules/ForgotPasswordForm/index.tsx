import React from 'react';
import * as yup from 'yup';
import { Grid } from 'atoms/Grid';
import { Formik, FormikHelpers } from 'formik';
import { Button } from 'molecules/Button';
import { validateRequiredEmail } from 'utils/validators';
import { FormInput } from 'molecules/FormInput';
import { ApolloError } from 'apollo-boost';

export const forgotPasswordValidation = yup.object().shape({
  email: validateRequiredEmail(),
});

export type FormValues = {
  email: string;
};
const initialValues: FormValues = {
  email: '',
};

export type ForgotPasswordProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
};

export const ForgotPasswordForm = ({ onSubmit, loading }: ForgotPasswordProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={forgotPasswordValidation}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid gridGap={{ xs: 18 }} p={{ xs: 11 }}>
              <FormInput label="signup.email" name="email" />
              <Button type="submit" title="forgotpassword.buttontext" loading={loading} />
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};
