import React from 'react';
import * as yup from 'yup';
import { Grid } from 'atoms/Grid';
import queryString from 'query-string';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Formik, FormikHelpers, Form } from 'formik';
import { Button } from 'molecules/Button';
import { validateRequiredEmail } from 'utils/validators';
import { FormInput } from 'molecules/FormInput';
import { ApolloError } from 'apollo-boost';
import { useLocation } from 'react-router';

export const noDeliveryValidation = yup.object().shape({
  email: validateRequiredEmail(),
});

export type FormValues = {
  email: string;
  zipCode: string;
};
export type InitialValues = {
  zip: string;
};

interface NoDeliveryFormProps {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  error?: ApolloError;
}
const getInitialValues = ({ zip }: InitialValues): FormValues => {
  return {
    zipCode: zip,
    email: '',
  };
};

export const NoDeliveryForm = ({ onSubmit, loading }: NoDeliveryFormProps) => {
  const location = useLocation();

  return (
    <Formik
      initialValues={getInitialValues(queryString.parse(location.search) as InitialValues)}
      onSubmit={onSubmit}
      validationSchema={noDeliveryValidation}
    >
      {() => {
        return (
          <Form>
            <Grid gridGap={{ xs: 18 }}>
              <Box>
                <FormInput label="signup.email" name="email" />
                <Text
                  as="p"
                  variant="small"
                  color="steelgrey.500"
                  fontWeight="medium"
                  pl={5}
                  mt={14}
                  id="badzip.email.not.share"
                />
              </Box>
              <Button type="submit" title="badzip.buttontext" loading={loading} />
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
