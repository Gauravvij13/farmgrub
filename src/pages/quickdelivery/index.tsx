import React from 'react';

import { Loader } from 'molecules/Loader';
import { Navbar } from 'molecules/Navbar';
import useAuth from 'contexts/Authentication';
import { ErrorPage } from 'molecules/ErrorPage';
import { useActiveQuickDeliveryQuery } from 'generated/graphql-hooks';

import { QuickDeliveryView } from './organisms/QuickDeliveryView';

const QuickDelivery = () => {
  const { data, loading, error, refetch } = useActiveQuickDeliveryQuery();
  const {
    state: { isLoggedIn },
  } = useAuth();

  if (loading) {
    return <Loader />;
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

  if (data) {
    return (
      <>
        {!isLoggedIn && <Navbar />}
        <QuickDeliveryView data={data?.activeQuickDelivery} />
      </>
    );
  }
  return null;
};
export default QuickDelivery;
