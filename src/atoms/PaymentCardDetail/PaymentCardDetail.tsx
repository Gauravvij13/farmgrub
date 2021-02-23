import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';

type PaymentCardDetailProps = {
  cardType?: string | null;
  lastDigits?: string | null;
};
export const PaymentCardDetail = ({ cardType, lastDigits }: PaymentCardDetailProps) => {
  return (
    <Grid gridAutoFlow="column" justifyContent="start" gridGap={3}>
      {cardType ? (
        <Text variant="body" color="mahogany.500" fontWeight="bold" textTransform="capitalize">
          {cardType}
        </Text>
      ) : null}
      <Text variant="body" color="mahogany.500" fontWeight="bold" textTransform="none">
        {`xxxx${lastDigits}`}
      </Text>
    </Grid>
  );
};
