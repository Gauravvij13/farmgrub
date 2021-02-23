import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { gql } from 'apollo-boost';

import queryString from 'query-string';

import { logError } from 'utils/logger';
import { Header } from 'molecules/Header';
import { Box } from 'atoms/Box';
import { TermsServices } from 'atoms/TermsServices';
import { Text } from 'atoms/Text';

import { PageWrapper } from 'templates/PageWrapper/PageWrapper';
import { FooterContainer } from 'pages/auth/atoms/FooterContainer';

import SignupForm, { FormValues } from './molecules/SignupForm';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

const Signup = () => {
  const location = useLocation();
  const { zip } = queryString.parse(location.search);
  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const history = useHistory();
  const handleSubmit = async (values: FormValues) => {
    try {
      await createUser({ variables: { input: values } });
      history.push(`/signup-success?email=${values.email}`);
    } catch (e) {
      logError(e);
    }
  };

  return (
    <PageWrapper>
      <Header heading="signup.heading" subheading="signup.subheading" />
      <Box mt={{ xs: 12 }}>
        <SignupForm
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
          zipCode={zip?.toString()!}
        />
        <FooterContainer>
          <Text variant="field" color="mahogany.500" id="signup.signinmessage" />
          <NavLink to={`/signin?zip=${zip}`} style={{ textDecoration: 'none' }}>
            <Text
              variant="field"
              color="dirtyblue.500"
              textTransform="uppercase"
              fontWeight="bold"
              id="signup.signinbutton"
            />
          </NavLink>
        </FooterContainer>
        <TermsServices />
      </Box>
    </PageWrapper>
  );
};
export default Signup;
