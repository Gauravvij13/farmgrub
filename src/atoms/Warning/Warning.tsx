import React from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

interface WarningProps {
  text?: LocaleString;
}
export const Warning = ({ text }: WarningProps) => {
  return (
    <Text
      as="h3"
      variant="small"
      color="steelgrey.500"
      id={text}
      position="absolute"
      bottom={{ xs: -18 }}
      left="12px"
    />
  );
};
