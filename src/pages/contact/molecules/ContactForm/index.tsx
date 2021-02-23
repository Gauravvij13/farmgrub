import React from 'react';
import * as yup from 'yup';
import { Grid } from 'atoms/Grid';
import { Button } from 'molecules/Button';
import { FormInput } from 'molecules/FormInput';
import { FormTextArea } from 'molecules/FormTextArea';
import { Formik, FormikHelpers, Form } from 'formik';
import {
  validateRequiredName,
  validateRequiredEmail,
  validateRequiredMessage,
} from 'utils/validators';

type FormValues = {
  name: string;
  email: string;
  message: string;
};
export const contactvalidation = yup.object().shape<FormValues>({
  name: validateRequiredName(),
  email: validateRequiredEmail(),
  message: validateRequiredMessage(),
});

const initialValues: FormValues = { name: '', email: '', message: '' };

export type ContactFormProps = {
  onSubmit(values: FormValues, formikHelpers: FormikHelpers<FormValues>): void;
  loading?: boolean;
  initialValues?: FormValues;
};

export const ContactForm = ({ onSubmit, loading }: ContactFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactvalidation}>
      {({ values }) => {
        return (
          <Form>
            <Grid
              gridGap="2.4rem"
              mx="auto"
              mt="2.4rem"
              px="1.6rem"
              width={{ md: '100%', lg: '60%' }}
            >
              <FormInput
                label="contact.name"
                name="name"
                value={values.name}
                autoFocus
                color="darklavender.500"
              />
              <FormInput
                label="contact.email"
                name="email"
                value={values.email}
                color="darklavender.500"
              />
              <FormTextArea
                label="contact.message"
                name="message"
                value={values.message}
                as="textarea"
                color="darklavender.500"
              />
              <Button
                title="contact.submit"
                type="submit"
                loading={loading}
                maxWidth="16.6rem"
                mt="1rem"
                ml="auto"
                maxHeight="4rem"
                mb="3.2rem"
              />
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
