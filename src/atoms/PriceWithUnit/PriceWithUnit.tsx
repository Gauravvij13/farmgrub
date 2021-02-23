import React from 'react';
import { Price } from 'atoms/Price';
import { Text, TextProps } from 'atoms/Text';
import { Grid } from 'atoms/Grid';

interface PriceWithUnitProps extends TextProps {
  amount?: string | number | null;
  unit?: string | null;
  priceTag?: string | null;
}

export const PriceWithUnit = ({ amount, priceTag, ...props }: PriceWithUnitProps) => {
  return (
    <Grid gridAutoFlow="column" justifyContent="start" alignItems="center" height="fit-content">
      <Text color="mahogany.500" {...props} verticalAlign="center" my="0rem">
        (<Price as="span" amount={amount} fontWeight="medium" {...props} />/{priceTag || 'lb'})
      </Text>
    </Grid>
  );
};
PriceWithUnit.defaultProps = {
  variant: 'bodyBold',
};
