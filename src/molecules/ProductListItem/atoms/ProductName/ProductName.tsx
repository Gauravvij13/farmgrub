import React from 'react';
import { Text, TextProps } from 'atoms/Text';

interface ProductNameProps extends TextProps {
  text?: string | null;
}
export const ProductName = ({ text, ...props }: ProductNameProps) => {
  return (
    <Text
      variant="bodyBold"
      textTransform="capitalize"
      color="mahogany.500"
      lineHeight="1.8rem"
      m={0}
      {...props}
    >
      {text}
    </Text>
  );
};
