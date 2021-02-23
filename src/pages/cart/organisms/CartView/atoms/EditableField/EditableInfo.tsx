import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { Icon } from 'molecules/Icon';
import { Phone } from 'atoms/Phone';

type EditableInfoProps = {
  heading: LocaleString;
  subDetail?: string | null;
  phoneNo?: string | null;
  showCardIcon?: boolean;
  alignment?: 'vertical' | 'horizontal';
  onClick?(isFormOpen: boolean): void;
};
export const EditableInfo = ({
  heading,
  subDetail,
  phoneNo,
  showCardIcon,
  alignment,
  onClick,
}: EditableInfoProps) => {
  return (
    <Grid gridGap={{ xs: 10 }} py={{ xs: 11 }}>
      <Grid gridTemplateRows="auto auto" gridGap="1.8rem">
        <Text as="h3" variant="body" id={heading} color="steelgrey.500" my={0} py={0} />
        <Grid
          gridAutoFlow={alignment === 'vertical' ? 'row' : 'column'}
          justifyContent="start"
          gridGap={alignment === 'vertical' ? 2 : 5}
          alignItems="center"
        >
          {showCardIcon && <Icon name="creditCard" height={30} width={30} />}
          <Text
            variant="body"
            color="steelgrey.500"
            fontWeight="bold"
            my={0}
            textTransform="capitalize"
          >
            {subDetail}
          </Text>

          {phoneNo && (
            <Phone phoneNo={phoneNo} variant="body" color="steelgrey.500" my={0} py="0.4rem" />
          )}

          <Text
            variant="body"
            color="applegreen.500"
            fontWeight="bold"
            id="delivery.address.edit"
            cursor="pointer"
            my={0}
            onClick={onClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
