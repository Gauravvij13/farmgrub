import React, { useCallback, useEffect } from 'react';
import { Grid } from 'atoms/Grid';
import { Box } from 'atoms/Box';
import { Spinner } from 'atoms/Spinner';
import { PageHeader } from 'atoms/PageHeader';
import { Button } from 'molecules/Button';
import { ErrorPage } from 'molecules/ErrorPage';

import {
  useUserDetailsQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
} from 'generated/graphql-hooks';
import { Toast } from 'molecules/Toast';
import { toast } from 'react-toastify';
import { logError } from 'utils/logger';
import useAuth from 'contexts/Authentication';
import Footer from 'molecules/Footer';
import { Text } from 'atoms/Text';
import AccountForm, { FormValues } from './organisms/AccountForm';
import { LoyaltyCardEditableSection } from './molecules/LoyaltyCardEditableSection/LoyaltyCardEditableSection';
import { AddLoyaltyCard } from './molecules/AddLoyaltyCard/AddLoyaltyCard';

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, error, data, client, refetch } = useUserDetailsQuery();
  const [
    updateUser,
    { loading: updateUserLoading, error: updateUserError },
  ] = useUpdateUserMutation();
  const [
    changePassword,
    { loading: passwordLoading, error: passwordError },
  ] = useChangePasswordMutation();

  const {
    actions: { logout },
  } = useAuth();

  const handleLogout = () => {
    client.resetStore();
    logout();
  };

  const handleSubmit = useCallback(
    async (values: FormValues, updateType: string, resetForm: () => void) => {
      if (updateType === 'name') {
        try {
          const updatedUser = await updateUser({
            variables: { input: { firstName: values.firstName, lastName: values.lastName } },
          });
          if (updatedUser?.data?.updateUser) {
            toast(<Toast title="account.update.success" locale />);
          }
        } catch (e) {
          logError(e);
        }
      }
      if (updateType === 'password') {
        if (values.currentPassword === values.newPassword) {
          toast(<Toast title="account.password.same" locale />);
        } else {
          try {
            await changePassword({
              variables: {
                input: { oldPassword: values?.currentPassword!, newPassword: values?.newPassword! },
              },
            });
            toast(<Toast title="password.changed" locale />);
            resetForm();
          } catch (e) {}
        }
      }
      if (updateType === 'phone') {
        try {
          await updateUser({
            variables: {
              input: { phoneNo: values?.phoneNo },
            },
          });
          toast(<Toast title="phone.changed" locale />);
          resetForm();
        } catch (e) {}
      }
    },
    [updateUser, changePassword],
  );

  const renderContent = () => {
    if (loading) {
      return (
        <Box height="3rem" width="3rem" mx="auto" my="2rem">
          <Spinner color="primary.500" />
        </Box>
      );
    }

    if (error) {
      return (
        <ErrorPage
          message="error.sorry"
          description="error.wrong"
          onRetry={refetch}
          title="try.again"
        />
      );
    }

    return (
      <Box mt="1rem">
        {data?.me && (
          <AccountForm
            onSubmit={handleSubmit}
            error={updateUserError || passwordError}
            loading={updateUserLoading || passwordLoading}
            initialValues={data?.me!}
          />
        )}
        <Text
          id="account.loyaltycards.heading"
          variant="body"
          fontWeight="bold"
          color="mahogany.500"
          mt="3rem"
          letterSpacing="0.2px"
          fontSize="1.6rem"
        />
        {data?.me?.loyaltyCards?.map(lc => (
          <LoyaltyCardEditableSection
            label={lc.supplier.name || ''}
            value={lc.cardNumber}
            cardId={lc.id!}
            key={lc.id!}
          />
        ))}
        <AddLoyaltyCard loyaltyCards={data?.me?.loyaltyCards} />
      </Box>
    );
  };

  return (
    <Grid minHeight="calc(100vh - 5.4rem)" mt={0} pt={0}>
      <PageHeader id="account.heading" />
      <Grid px="1.6rem" width={{ xs: '80%', md: '50%', lg: '60%' }} mx="auto" my="5rem">
        <Grid gridGap={18}>
          <Box width="100%">{renderContent()}</Box>
        </Grid>
        <Button title="account.logout" onClick={handleLogout} variant="secondary" mt="2.4rem" />
      </Grid>
      <Box alignSelf="end">
        <Footer />
      </Box>
    </Grid>
  );
};

export default Account;
