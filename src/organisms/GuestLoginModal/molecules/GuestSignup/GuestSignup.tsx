import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { logError } from 'utils/logger';
import { Header } from 'molecules/Header';
import { Box } from 'atoms/Box';
import { TermsServices } from 'atoms/TermsServices';
import useGuest from '../../contexts/GuestContext';

import { GoodZipImage } from '../../../../atoms/GoodZipImage';
import { ReEnterZipCodeButton } from '../../atoms/ReEnterZipCodeButton';

import { GuestSigninButton } from '../../atoms/GuestSigninButton';

import SignupForm, { FormValues } from '../../../../pages/auth/signup/molecules/SignupForm';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

export const GuestSignup = () => {
  const {
    state: { guestZipCode },
    actions: { setLoginWarningState, setGuestRoute },
  } = useGuest();

  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const history = useHistory();

  const handleSubmit = async (values: FormValues) => {
    try {
      await createUser({ variables: { input: values } });
      setLoginWarningState(false);
      setGuestRoute('zipcode');
      history.push(`/signup-success?email=${values.email}`);
    } catch (e) {
      logError(e);
    }
  };

  return (
    <>
      <Box pb={7}>
        <GoodZipImage />
      </Box>
      <Header
        heading="signup.heading"
        headingValues={{ zip: guestZipCode }}
        subheading="signup.subheading"
      />
      <Box mt={{ xs: 12 }}>
        {guestZipCode && (
          <SignupForm
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
            zipCode={guestZipCode}
          />
        )}
        <TermsServices />
        <ReEnterZipCodeButton />
        <GuestSigninButton />
      </Box>
    </>
  );
};
