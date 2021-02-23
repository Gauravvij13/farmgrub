import React from 'react';
import { Text, TextProps } from 'atoms/Text';
import { LocaleString } from 'locales';

interface HeadingProps extends TextProps {
  text?: LocaleString;
}
export const Heading = ({ text, ...props }: HeadingProps) => {
  return (
    <Text
      as="h3"
      variant="headingBold"
      fontWeight="bold"
      color="secondary.500"
      id={text}
      {...props}
    />
  );
};
