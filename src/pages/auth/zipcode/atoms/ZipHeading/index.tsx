import React from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

type zipHeadingProps = {
  textColor: string;
  text: LocaleString;
};

export const ZipHeading = ({ text, textColor }: zipHeadingProps) => {
  return (
    <Text
      as="h3"
      color={textColor}
      textAlign="center"
      variant="heading"
      id={text}
      lineHeight="140%"
      fontWeight="medium"
      px={{ xs: 16 }}
    />
  );
};
