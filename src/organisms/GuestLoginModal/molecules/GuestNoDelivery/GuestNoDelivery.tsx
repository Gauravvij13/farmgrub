import React, { useState, useCallback } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { logError } from 'utils/logger';
import { Header } from 'molecules/Header';
import { LogoContent } from 'templates/LogoContent';

import { Box } from '../../../../atoms/Box';
import useGuest from '../../contexts/GuestContext';
import { BadZipImage } from '../../../../atoms/BadZipImage';
import { GuestSigninButton } from '../../atoms/GuestSigninButton';
import { ReEnterZipCodeButton } from '../../atoms/ReEnterZipCodeButton';
import {
  NoDeliveryForm,
  FormValues,
} from '../../../../pages/auth/nodelivery/molecules/NoDeliveryForm';

const FUTURE_CONTACT = gql`
  mutation FutureContact($input: FutureContactInput!) {
    futureContact(input: $input) {
      successMessage
    }
  }
`;

export const GuestNoDelivery = () => {
  const {
    state: { guestZipCode },
    actions: { setGuestRoute },
  } = useGuest();

  const [emailSent, setEmailSent] = useState(false);

  const [futureContact, { loading, error }] = useMutation(FUTURE_CONTACT);

  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        await futureContact({ variables: { input: { ...values, zipCode: guestZipCode } } });
        setEmailSent(true);
      } catch (e) {
        logError(e);
      }
    },
    [futureContact, guestZipCode],
  );

  const redirectToZipcode = useCallback(() => setGuestRoute('zipcode'), [setGuestRoute]);

  if (emailSent) {
    return (
      <LogoContent hideBackButton>
        <Box mt={{ xs: '42px' }} px={{ xs: 16 }}>
          <Header
            heading="zipcode.request.successheading"
            subheading="zipcode.request.successmessage"
          />
        </Box>
        <Flex
          bg="offwhite.500"
          gridAutoFlow="column"
          justifyContent="center"
          alignItems="baseline"
          gridGap={{ xs: 2 }}
          mt={{ xs: 15 }}
          py={4}
          flexWrap="wrap"
        >
          <Text variant="field" color="mahogany.500" id="zipcode.request.footermessage" />
          <Text
            variant="field"
            color="dirtyblue.500"
            textTransform="uppercase"
            cursor="pointer"
            fontWeight="bold"
            id="footerredirect.buttontext"
            onClick={redirectToZipcode}
          />
        </Flex>
      </LogoContent>
    );
  }
  return (
    <>
      <Box px={{ xs: 16 }}>
        <Box pb={8} pt={1}>
          <BadZipImage />
        </Box>
        <Header
          heading="badzip.logo.heading"
          headingValues={{ zip: guestZipCode }}
          subheading="badzip.logo.description"
        />
      </Box>
      <Box mt={{ xs: 12 }}>
        <NoDeliveryForm onSubmit={onSubmit} loading={loading} error={error} />
      </Box>
      <ReEnterZipCodeButton />
      <GuestSigninButton />
    </>
  );
};
