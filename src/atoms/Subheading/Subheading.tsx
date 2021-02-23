import React from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

interface SubheadingProps {
  text?: LocaleString;
}
export const Subheading = ({ text }: SubheadingProps) => {
  return <Text as="h3" variant="field" color="mahogany.500" id={text} />;
};
