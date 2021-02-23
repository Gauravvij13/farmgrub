import React, { FC, useCallback } from 'react';
import { Grid } from 'atoms/Grid';
import { gql } from 'apollo-boost';
import useAuth from 'contexts/Authentication';
import { useMutation } from '@apollo/react-hooks';
import { Header } from 'molecules/Header';
import { LogoImage } from 'pages/auth/atoms/LogoImage';
import { WithBackButton } from 'templates/WithBackButton';
import { ChangePasswordForm, FormValues } from '../../molecules/ChangePasswordForm';

const CHANGE_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
type ChangePasswordProps = {
  code: string;
};
export const ChangePassword: FC<ChangePasswordProps> = ({ code }) => {
  const [resetPassword, { loading, error }] = useMutation(CHANGE_PASSWORD);
  const {
    actions: { setUserInfo },
  } = useAuth();
  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const { data } = await resetPassword({ variables: { input: values } });
        const token = data?.resetPassword?.token;
        const user = data?.resetPassword?.user;
        if (token && data) {
          setUserInfo(token, user);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    },
    [resetPassword, setUserInfo],
  );
  return (
    <div>
      <WithBackButton>
        <Grid justifySelf="center" height="100%" alignItems="center" px={{ xs: 16 }}>
          <Grid gridGap={18} width={{ md: '60%' }} m={{ md: 'auto' }}>
            <LogoImage />
            <Header heading="password.change" subheading="password.change.description" />
            <ChangePasswordForm
              onSubmit={handleSubmit}
              code={code}
              loading={loading}
              error={error}
            />
          </Grid>
        </Grid>
      </WithBackButton>
    </div>
  );
};
