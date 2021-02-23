import React from 'react';
import { useCodeQuery } from 'hooks/useCodeQuery';
import { ChangePassword } from './organisms/changepassword';
import { SendEmail } from './organisms/sendemail';

const ForgotPassword = () => {
  const { code } = useCodeQuery();

  if (code) {
    return <ChangePassword code={code} />;
  }
  return <SendEmail />;
};
export default ForgotPassword;
