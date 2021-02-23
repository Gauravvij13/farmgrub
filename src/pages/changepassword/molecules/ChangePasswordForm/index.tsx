import React from 'react';
import * as yup from 'yup';
import { Grid } from 'atoms/Grid';
// import { Box } from 'atoms/Box';
import { Button } from 'molecules/Button';
import { Header } from 'molecules/Header';
import { Formik, Form, FormikHelpers } from 'formik';
import { validateRequiredPassword } from 'utils/validators';
import { FormPasswordInput } from 'molecules/FormPasswordInput';
import { ApolloError } from 'apollo-boost';

export const passwordvalidation = yup.object().shape({
  oldPassword: validateRequiredPassword(),
  newPassword: validateRequiredPassword(),
});

export type FormValues = {
  oldPassword: string;
  newPassword: string;
};

export type ChangePasswordFormProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
};

const getInitialValues = (): FormValues => {
  return {
    oldPassword: '',
    newPassword: '',
  };
};

const ChangePasswordForm = ({ onSubmit, loading }: ChangePasswordFormProps) => {
  return (
    <Formik
      validationSchema={passwordvalidation}
      initialValues={getInitialValues()}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form>
            <Grid justifySelf="center" alignItems="center">
              <Header heading="changepassword.heading" subheading="changepassword.subheading" />
              <Grid gridGap="2rem" mt="2rem">
                <FormPasswordInput label="changepassword.old" autoFocus name="oldPassword" />
                <FormPasswordInput label="changepassword.new" name="newPassword" />
                <Button title="changepassword.button.update" type="submit" loading={loading} />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ChangePasswordForm;
