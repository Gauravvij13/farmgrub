import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';

type CartFormHeaderProps = {
  heading: LocaleString;
  onClick?(isFormOpen: boolean): void;
  closeButton?: boolean;
};
export const CartFormHeader = ({ heading, onClick, closeButton }: CartFormHeaderProps) => {
  return (
    <Grid gridAutoFlow="column">
      <Text as="h3" variant="body" id={heading} color="steelgrey.500" />
      {closeButton && (
        <Text
          as="h3"
          variant="body"
          color="mahogany.500"
          cursor="pointer"
          textAlign="right"
          id="delivery.address.close"
          onClick={onClick}
          fontWeight="bold"
        />
      )}
    </Grid>
  );
};
