import React from 'react';
import { Toast } from 'molecules/Toast';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/react-hooks';
import { WithBackButton } from 'templates/WithBackButton';
import { CHANGE_PASSWORD } from 'graphql/mutations';
import { PageWrapper } from 'templates/PageWrapper/PageWrapper';
import ChangePasswordForm, { FormValues } from './molecules/ChangePasswordForm';

const ChangePassword = () => {
  const [changePassword, { loading, error }] = useMutation(CHANGE_PASSWORD);

  const onHandleSubmit = async (values: FormValues) => {
    try {
      await changePassword({
        variables: { input: { oldPassword: values.oldPassword, newPassword: values.newPassword } },
      });
      toast(<Toast title="password.changed" locale />);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  };

  return (
    <WithBackButton>
      <PageWrapper>
        <ChangePasswordForm onSubmit={onHandleSubmit} loading={loading} error={error} />
      </PageWrapper>
    </WithBackButton>
  );
};

export default ChangePassword;
