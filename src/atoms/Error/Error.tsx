import React from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

interface ErrorProps {
  text?: LocaleString;
}
export const Error = ({ text }: ErrorProps) => {
  return (
    <Text
      as="h3"
      variant="small"
      color="darkorange.500"
      id={text}
      position="absolute"
      bottom={{ xs: -18 }}
      left="12px"
    />
  );
};
