import React from 'react';
import { Text, TextProps } from 'atoms/Text';
import { LocaleString } from 'locales';

interface StatusProps extends TextProps {
  status?: string;
}
export const OrderStatus = ({ status }: StatusProps) => {
  return (
    <Text
      variant="body"
      fontWeight="bold"
      color="mahogany.500"
      pt="0.8rem"
      my={0}
      id={`orderstatus.${status}` as LocaleString}
    />
  );
};
