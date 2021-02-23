import React, { useEffect } from 'react';
import { ErrorPage } from 'molecules/ErrorPage';

import { PageHeader } from 'atoms/PageHeader';
import { Box } from 'atoms/Box';
import { Loader } from 'molecules/Loader/Loader';
import { OrderList } from 'molecules/OrderList';
import { useOrderListQuery } from 'generated/graphql-hooks';
import Footer from 'molecules/Footer';

import { Grid } from 'atoms/Grid';
import { NoPastOrder } from './molecules/NoPastOrder';

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, error, loading, refetch } = useOrderListQuery({ fetchPolicy: 'network-only' });

  const renderContent = () => {
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
    if (data?.orderList.length === 0) {
      return <NoPastOrder />;
    }

    return (
      <Grid minHeight="calc(100vh - 5.4rem)" gridTemplateRows="1fr auto">
        <Box>
          <PageHeader id="orders.order" />
          <OrderList data={data?.orderList} />
        </Box>
        <Footer />
      </Grid>
    );
  };

  return <Box minHeight="calc(100vh - 5.4rem)">{renderContent()}</Box>;
};
export default Orders;
