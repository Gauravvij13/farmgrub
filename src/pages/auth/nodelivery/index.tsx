/* eslint-disable no-console */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { gql } from 'apollo-boost';
import { Box } from 'atoms/Box';
import { useMutation } from '@apollo/react-hooks';
import { SuccessWithRedirect } from 'templates/SucessWithRedirect';
import { Header } from 'molecules/Header';
import Div100vh from 'react-div-100vh';
import { BackButton } from 'atoms/BackButton';
import { PageWrapper } from 'templates/PageWrapper/PageWrapper';
import { BadZipImage } from 'atoms/BadZipImage';
import { NoDeliveryForm, FormValues } from './molecules/NoDeliveryForm';

const FUTURE_CONTACT = gql`
  mutation FutureContact($input: FutureContactInput!) {
    futureContact(input: $input) {
      successMessage
    }
  }
`;

type NoDelivery = {
  left?: string;
  top?: string;
};
const NoDelivery = ({ left, top }: NoDelivery) => {
  const location = useLocation();
  const [emailSent, setEmailSent] = useState(false);
  const { zip } = queryString.parse(location.search);
  const [futureContact, { loading, error }] = useMutation(FUTURE_CONTACT);

  const onSubmit = async (values: FormValues) => {
    try {
      await futureContact({ variables: { input: values } });
      setEmailSent(true);
    } catch (e) {
      console.warn(e);
    }
  };

  if (emailSent) {
    return (
      <SuccessWithRedirect
        headerProps={{
          heading: 'zipcode.request.successheading',
          subheading: 'zipcode.request.successmessage',
        }}
        footerProps={{
          text: 'zipcode.request.footermessage',
          to: '/zipcode',
        }}
      />
    );
  }
  return (
    <Div100vh>
      <BackButton left={left} top={top} />
      <PageWrapper>
        <Box px={{ xs: 16 }}>
          <Box pb={7}>
            <BadZipImage />
          </Box>
          <Header
            heading="badzip.logo.heading"
            headingValues={{ zip }}
            subheading="badzip.logo.description"
          />
        </Box>
        <Box mt={{ xs: 12 }}>
          <NoDeliveryForm onSubmit={onSubmit} loading={loading} error={error} />
        </Box>
      </PageWrapper>
    </Div100vh>
  );
};
export default NoDelivery;
