import React from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

type LandingHeadingProps = {
  text: LocaleString;
};

export const LandingHeading = ({ text }: LandingHeadingProps) => {
  return (
    <Text
      as="h3"
      color="mahogany.500"
      textAlign="center"
      variant="heading"
      textTransform="uppercase"
      id={text}
      lineHeight="140%"
      fontWeight="medium"
      px={{ xs: 24 }}
    />
  );
};
