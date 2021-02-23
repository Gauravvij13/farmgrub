import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Header } from 'molecules/Header';
import { Box } from 'atoms/Box';
import { WithBackButton } from 'templates/WithBackButton';
import { FooterRedirect } from 'molecules/FooterRedirect';
import { SuccessWithRedirect } from 'templates/SucessWithRedirect';
import { LogoImage } from 'pages/auth/atoms/LogoImage';
import { PageWrapper } from 'templates/PageWrapper/PageWrapper';
import { ForgotPasswordForm, FormValues } from '../../molecules/ForgotPasswordForm';

const SEND_EMAIL = gql`
  mutation ForgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      successMessage
    }
  }
`;
export const SendEmail = () => {
  const [forgotPassword, { loading, error }] = useMutation(SEND_EMAIL);
  const [emailIsSent, setEmailIsSent] = useState(false);
  const handleSubmit = async (values: FormValues) => {
    try {
      await forgotPassword({ variables: { input: values } });
      setEmailIsSent(true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  };
  if (emailIsSent) {
    return (
      <SuccessWithRedirect
        headerProps={{
          heading: 'forgotpassword.sentemail.success',
          subheading: 'forgotpassword.sentemail.desc',
        }}
        footerProps={{
          text: 'forgotpassword.footer.desc',
          buttonText: 'forgotpassword.footer.buttontext',
          to: '/zipcode',
        }}
      />
    );
  }
  return (
    <WithBackButton>
      <PageWrapper>
        <LogoImage />
        <Box textAlign="center" px={{ xs: 18 }}>
          <Header heading="signin.forgotpassword" subheading="signin.forgotpassword.description" />
        </Box>
        <ForgotPasswordForm onSubmit={handleSubmit} loading={loading} error={error} />
        <FooterRedirect text="forgotpassword.back.signin" to="/zipcode" />
      </PageWrapper>
    </WithBackButton>
  );
};
