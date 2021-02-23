import React from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { QuickDelivery } from 'generated/graphql-hooks';

type QuickDeliveryDetailProps = {
  quickDeliveryDetail: QuickDelivery;
};

export const QuickDeliveryDetail = ({ quickDeliveryDetail }: QuickDeliveryDetailProps) => {
  return (
    <Grid textAlign="center">
      <Text as="h3" variant="body" color="mahogany.500" lineHeight={1.5} fontWeight="500">
        {quickDeliveryDetail?.details}
      </Text>
      <Text
        as="h3"
        pt="1.5rem"
        variant="title"
        fontWeight="bold"
        color="applegreen.500"
        lineHeight="2.5rem"
      >
        {quickDeliveryDetail?.title}
      </Text>
      <Text as="h3" variant="body" color="mahogany.500" fontWeight="500">
        {quickDeliveryDetail?.subtitle}
      </Text>
      <Box my={15} height=".2rem" width="4rem" bg="mahogany.500" mx="auto" />
    </Grid>
  );
};
