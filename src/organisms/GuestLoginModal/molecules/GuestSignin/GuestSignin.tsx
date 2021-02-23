import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import LogRocket from 'logrocket';
import useAuth from 'contexts/Authentication';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';

import { SEND_VERIFICATION_EMAIL } from 'graphql/mutations';
import { useHistory } from 'react-router';
import { Header } from 'molecules/Header';
import { TermsServices } from 'atoms/TermsServices';
import { logError } from 'utils/logger';
import useGuest from '../../contexts/GuestContext';
import { GoodZipImage } from '../../../../atoms/GoodZipImage';
import { SigninForm, FormValues } from '../../../../pages/auth/signin/molecules/SigninForm';
import env from '../../../../env';

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
export const GuestSignin = () => {
  const [signinMutation, { loading }] = useMutation(SIGN_IN);
  const history = useHistory();
  const [sendVerificationEmail, { loading: sendVerificationEmailLoading }] = useMutation(
    SEND_VERIFICATION_EMAIL,
  );
  const {
    actions: { setGuestRoute, setLoginWarningState },
  } = useGuest();
  const {
    actions: { setUserInfo },
  } = useAuth();
  const handleSubmit = async (values: FormValues) => {
    try {
      const { data } = await signinMutation({ variables: { input: values } });
      const token = data?.signIn?.token;
      const user = data?.signIn?.user;
      if (data?.signIn?.user?.verified) {
        if (token && user) {
          setUserInfo(token, user);
          setLoginWarningState(false);

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
      logError(e);
    }
  };
  return (
    <>
      <Box pb={7}>
        <GoodZipImage />
      </Box>
      <Header heading="signin.heading" subheading="signin.subheading" animate />
      <Box mt={{ xs: 12 }}>
        <SigninForm onSubmit={handleSubmit} loading={loading || sendVerificationEmailLoading} />
        <TermsServices />
        <Box pt="15">
          <Text
            variant="field"
            color="dirtyblue.500"
            fontWeight="bold"
            id="reenter.zipcode"
            textAlign="center"
            cursor="pointer"
            onClick={() => setGuestRoute('zipcode')}
          />
        </Box>
      </Box>
    </>
  );
};
