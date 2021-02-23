import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import LogRocket from 'logrocket';
import useAuth from 'contexts/Authentication';
import { Box } from 'atoms/Box';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { SEND_VERIFICATION_EMAIL } from 'graphql/mutations';
import { useHistory } from 'react-router';
import { Header } from 'molecules/Header';
import { TermsServices } from 'atoms/TermsServices';
import { PageWrapper } from 'templates/PageWrapper/PageWrapper';
import { FooterRedirect } from 'molecules/FooterRedirect';

import { SigninForm, FormValues } from '../../molecules/SigninForm';
import env from '../../../../../env';

const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
        verified
      }
    }
  }
`;
export const Signin = () => {
  const location = useLocation();
  const { zip } = queryString.parse(location.search);
  const [signinMutation, { loading }] = useMutation(SIGN_IN);
  const history = useHistory();
  const [sendVerificationEmail, { loading: sendVerificationEmailLoading }] = useMutation(
    SEND_VERIFICATION_EMAIL,
  );

  const {
    actions: { setUserInfo },
  } = useAuth();
  const handleSubmit = async (values: FormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      const { data } = await signinMutation({ variables: { input: values } });
      const token = data?.signIn?.token;
      const user = data?.signIn?.user;
      if (data?.signIn?.user?.verified) {
        if (token && user) {
          setUserInfo(token, user);

          // logRocket identification of users
          LogRocket.identify(env?.LOGROCKET_KEY!, {
            name: data?.signIn?.user?.firstName,
            email: data?.signIn?.user?.email,
          });
        }
      } else {
        await sendVerificationEmail({
          variables: { input: { email: values.email } },
        });
        history.push(`/signup-success?email=${values.email}`);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  };
  return (
    <PageWrapper>
      <Header heading="signin.heading" subheading="signin.subheading" animate />
      <Box mt={{ xs: 12 }}>
        <SigninForm onSubmit={handleSubmit} loading={loading || sendVerificationEmailLoading} />
        <FooterRedirect text="signin.signinmessage" to={zip ? `/signup?zip=${zip}` : '/zipcode'} />
        <TermsServices />
      </Box>
    </PageWrapper>
  );
};
