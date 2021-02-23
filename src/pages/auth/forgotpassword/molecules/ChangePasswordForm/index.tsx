import React from 'react';
import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { Button } from 'molecules/Button';
import { validateRequiredPassword } from 'utils/validators';
import { Grid } from 'atoms/Grid';
import { ApolloError } from 'apollo-boost';
import { FormPasswordInput } from 'molecules/FormPasswordInput';

const changePasswordValidation = yup.object().shape({
  password: validateRequiredPassword(),
});

export type FormValues = {
  token: string;
  password: string;
};
const initialValues: FormValues = {
  token: '',
  password: '',
};

export type ChangePasswordForm = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
  code: string;
};
const getInitialValues = (code: string) => {
  return { ...initialValues, token: code };
};
export const ChangePasswordForm = ({ onSubmit, loading, code }: ChangePasswordForm) => {
  return (
    <Formik
      initialValues={getInitialValues(code)}
      onSubmit={onSubmit}
      validationSchema={changePasswordValidation}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid gridGap="2rem">
              <FormPasswordInput name="password" label="changepassword.label" />
              <Button type="submit" title="changepassword.buttontext" loading={loading} />
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};
