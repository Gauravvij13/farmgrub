import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, FormikHelpers, Form } from 'formik';
import queryString from 'query-string';
import { Button } from 'molecules/Button';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';
import { validateRequiredEmail, validateRequiredPassword } from 'utils/validators';
import { ApolloError } from 'apollo-boost';
import { FormPasswordInput } from 'molecules/FormPasswordInput';

export const signinvalidation = yup.object().shape({
  email: validateRequiredEmail(),
  password: validateRequiredPassword(),
});
export type InitialValues = {
  zip: string;
};
export type FormValues = {
  zipCode: string;
  email: string;
  password: string;
};
const getInitialValues = ({ zip }: InitialValues): FormValues => {
  return {
    zipCode: zip,
    email: '',
    password: '',
  };
};

export type SigninFormProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
};

export const SigninForm = ({ onSubmit, loading }: SigninFormProps) => {
  const location = useLocation();

  return (
    <Formik
      initialValues={getInitialValues(queryString.parse(location.search) as InitialValues)}
      validationSchema={signinvalidation}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form>
            <Grid gridGap={{ xs: 10 }} m="auto">
              <Grid gridTemplateRows="auto auto" gridGap={{ xs: 18 }}>
                <FormInput name="email" label="signup.email" type="email" />
                <Grid gridGap={{ xs: 16 }}>
                  <FormPasswordInput label="signin.password" name="password" />
                  <NavLink
                    to="/forgot-password"
                    style={{ textDecoration: 'none', width: 'max-content' }}
                  >
                    <Text
                      variant="field"
                      color="mahogany.500"
                      fontWeight="medium"
                      id="signin.forgotpassword"
                      display="initial"
                    />
                  </NavLink>
                </Grid>
              </Grid>
              <Button type="submit" title="signin.buttontext" loading={loading} />
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
