import React from 'react';
import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { Button } from 'molecules/Button';
import { Grid } from 'atoms/Grid';
import {
  validateRequiredEmail,
  validateRequiredPassword,
  validateRequiredFirstName,
  validateRequiredLastName,
  validateRequiredZipcode,
} from 'utils/validators';
import { FormInput } from 'molecules/FormInput';
import { ApolloError } from 'apollo-boost';
import { FormPasswordInput } from 'molecules/FormPasswordInput';

export const signupvalidation = yup.object().shape({
  email: validateRequiredEmail(),
  password: validateRequiredPassword(),
  lastName: validateRequiredLastName(),
  firstName: validateRequiredFirstName(),
  zipCode: validateRequiredZipcode(),
});
export type InitialValues = {
  zipCode: string;
};
export type FormValues = {
  zipCode: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const getInitialValues = ({ zipCode }: InitialValues): FormValues => {
  return {
    zipCode,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
};
export type SignupFormProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
  zipCode: string;
};

const SignupForm = ({ onSubmit, loading, zipCode }: SignupFormProps) => {
  return (
    <Formik
      initialValues={getInitialValues({ zipCode } as InitialValues)}
      onSubmit={onSubmit}
      validationSchema={signupvalidation}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid gridGap={{ xs: 18 }}>
              <Grid gridTemplateColumns="1fr 1fr" gridGap={4}>
                <FormInput label="signup.firstname" name="firstName" />
                <FormInput label="signup.lastName" name="lastName" />
              </Grid>
              <FormInput label="signup.email" name="email" type="email" />
              <FormPasswordInput label="signup.password" name="password" />
              <Button mt={{ xs: 15 }} type="submit" title="signup.buttontext" loading={loading} />
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
