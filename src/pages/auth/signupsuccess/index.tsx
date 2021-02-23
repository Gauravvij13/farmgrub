import React, { useCallback, useEffect } from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Header } from 'molecules/Header';
import queryString from 'query-string';
import { LogoContent } from 'templates/LogoContent';
import { useLocation } from 'react-router';
import { useMutation } from '@apollo/react-hooks';
import { SEND_VERIFICATION_EMAIL } from 'graphql/mutations';
import { showGraphqlError } from 'utils/error';
import { ButtonText } from 'atoms/ButtonText';
import { FooterContainer } from '../atoms/FooterContainer';

const SignupSuccess = () => {
  const location = useLocation();
  const { email } = queryString.parse(location.search);
  const [
    sendVerificationEmail,
    { loading: sendVerificationEmailLoading, error: sendVerificationEmailError },
  ] = useMutation(SEND_VERIFICATION_EMAIL);

  useEffect(() => {
    if (sendVerificationEmailError) {
      showGraphqlError(sendVerificationEmailError);
    }
  }, [sendVerificationEmailError]);

  const handleResend = useCallback(async () => {
    try {
      await sendVerificationEmail({ variables: { input: { email } } });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  }, [sendVerificationEmail, email]);

  return (
    <>
      <LogoContent>
        <Box pt={{ xs: '4.2rem' }} px={{ xs: 16 }}>
          <Header heading="signup.success.heading" subheading="signup.success.subheading" />
        </Box>
      </LogoContent>
      <FooterContainer>
        <Text variant="field" color="mahogany.500" id="signup.success.resend.email.message" />
        {sendVerificationEmailLoading ? (
          <Text
            variant="field"
            color="grey.500"
            fontWeight="bold"
            id="signup.success.resend.email.login"
          />
        ) : (
          <ButtonText title="signup.success.resend.email.button" onClick={handleResend} />
        )}
      </FooterContainer>
    </>
  );
};

export default SignupSuccess;
