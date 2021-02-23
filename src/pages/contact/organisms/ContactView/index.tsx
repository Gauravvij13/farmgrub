import React, { useCallback } from 'react';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import Footer from 'molecules/Footer';
import { FormikHelpers } from 'formik';
import { PageHeader } from 'atoms/PageHeader';
import { QueryContact } from 'molecules/QueryContact';
import { ContactForm } from 'pages/contact/molecules/ContactForm';
import { MessageHeading } from 'pages/contact/molecules/MessageHeading';
import { ContactTimings } from 'pages/contact/molecules/ContactTimings';
import { useContactUsMutation, useStoreQuery } from 'generated/graphql-hooks';

import { MessageSentModal } from '../../molecules/MessageSentModal';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactView = () => {
  const [contactUs, { data, loading }] = useContactUsMutation();
  const { data: contactDetails } = useStoreQuery();

  const handleUpdate = useCallback(
    async (values: ContactFormValues, { resetForm }: FormikHelpers<ContactFormValues>) => {
      try {
        await contactUs({ variables: { input: values } });
        resetForm({});
      } catch (e) {}
    },
    [contactUs],
  );

  return (
    <Grid minHeight="calc(100vh - 5.3rem)">
      <Box>
        <PageHeader id="contact.heading" />
        <QueryContact mb={0} pb="1rem" pt="2.4rem" phone={contactDetails?.store?.phone!} />
        <ContactTimings />
        <Box bg="pale.500" height="0.1rem" my="1.6rem" />
        <MessageHeading />
        <ContactForm onSubmit={handleUpdate} loading={loading} />
        {data && <MessageSentModal message={data?.contactUs?.successMessage!} />}
      </Box>
      <Footer />
    </Grid>
  );
};
