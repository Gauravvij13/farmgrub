import React from 'react';
import { Text } from 'atoms/Text';

type CountHeading = {
  count: string | number;
};
export const CountHeading = ({ count }: CountHeading) => (
  <Text
    variant="field"
    pt="1rem"
    my="0rem"
    color="steelgrey.500"
    textAlign="center"
    bg="offwhite.0"
    values={{ count }}
    id="cart.items.count"
    width="100%"
  />
);
