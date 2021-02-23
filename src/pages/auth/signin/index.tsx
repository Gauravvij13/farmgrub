/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { logError } from 'utils/logger';
import { VERIFY_EMAIL } from 'graphql/mutations';
import useAuth from 'contexts/Authentication';
import { useCodeQuery } from 'hooks/useCodeQuery';
import { Signin } from './organisms/signin';
import { VerifyingMessage } from './atoms/VerifingMesasge';
import { VerifyFailedMessage } from './atoms/VerifyFailedMessage';

const SigninPage = () => {
  const { code: codeFromQuery } = useCodeQuery();
  const [verifyEmail, { loading: verifyEmailLoading, error: verifyEmailError }] = useMutation(
    VERIFY_EMAIL,
  );
  const {
    actions: { setUserInfo },
  } = useAuth();
  const handleVerifyEmail = useCallback(
    async (code: string) => {
      try {
        const { data } = await verifyEmail({ variables: { input: { token: code } } });
        const token = data?.verifyEmail?.token;
        const user = data?.verifyEmail?.user;
        if (token && user) {
          setUserInfo(token, user);
        }
      } catch (e) {
        logError(e);
      }
    },
    [verifyEmail, setUserInfo],
  );

  useEffect(() => {
    if (codeFromQuery && typeof codeFromQuery === 'string') {
      handleVerifyEmail(codeFromQuery);
    }
  }, [handleVerifyEmail, codeFromQuery]);
  if (verifyEmailLoading) {
    return <VerifyingMessage />;
  }
  if (verifyEmailError) {
    return <VerifyFailedMessage />;
  }

  return <Signin />;
};
export default SigninPage;
