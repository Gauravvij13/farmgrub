import React from 'react';
import { Text, TextProps } from 'atoms/Text';
import { Flex } from 'atoms/Flex';

export interface PriceProps extends TextProps {
  amount?: string | number | null;
  currency?: string;
  discountedPrice?: string | number | null;
}
export const Price = ({ amount, currency, discountedPrice, ...props }: PriceProps) => {
  return (
    <Flex>
      <Text
        as="h3"
        variant="bodyBold"
        color="mahogany.500"
        lineHeight="1.8rem"
        textDecoration={discountedPrice ? 'line-through' : undefined}
        {...props}
      >
        {currency}
        {Number(
          // eslint-disable-next-line no-restricted-globals
          isNaN(Number(amount || 0)) ? 0 : amount,
        ).toFixed(2)}
      </Text>
      {discountedPrice ? (
        <Text as="h3" variant="bodyBold" color="mahogany.500" lineHeight="1.8rem" ml={2} {...props}>
          {currency}
          {Number(
            // eslint-disable-next-line no-restricted-globals
            isNaN(Number(discountedPrice || 0)) ? 0 : discountedPrice,
          ).toFixed(2)}
        </Text>
      ) : null}
    </Flex>
  );
};

Price.defaultProps = {
  currency: '$',
  fontWeight: 'bold',
  amount: '0',
};
