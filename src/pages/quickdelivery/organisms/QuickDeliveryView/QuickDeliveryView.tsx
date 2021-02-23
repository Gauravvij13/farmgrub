import React from 'react';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import Footer from 'molecules/Footer';
import { PageHeader } from 'atoms/PageHeader';
import { QuickDelivery } from 'generated/graphql-hooks';

import { QueryContact } from '../../../../molecules/QueryContact';
import { QuickDeliveryDetail } from '../../molecules/QuickDeliveryDetail';
import { QuickDeliveryWindows } from '../../molecules/QuickDeliveryWindows';

type QuickDeliveryViewProps = {
  data: QuickDelivery;
};

export const QuickDeliveryView = ({ data }: QuickDeliveryViewProps) => {
  return (
    <Grid minHeight="calc(100vh - 5.4rem)">
      <Box>
        <PageHeader id="quick.delivery.pageheader" />
        <Box px="4rem" py="3rem" borderBottom="1px solid" borderColor="applegreen.500">
          <QuickDeliveryDetail quickDeliveryDetail={data} />
          <QuickDeliveryWindows quickDeliveriyWindows={data} />
        </Box>
        <QueryContact phone={data?.phone} />
      </Box>
      <Box alignSelf="end">
        <Footer />
      </Box>
    </Grid>
  );
};
