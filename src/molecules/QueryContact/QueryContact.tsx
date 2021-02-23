import React from 'react';
import { Box, BoxProps } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Phone } from 'atoms/Phone';
import { Grid } from 'atoms/Grid';
import { LocaleString } from 'locales';

interface textProps extends BoxProps {
  id?: LocaleString;
  color: string;
  children?: string;
}

interface QueryContactProps extends BoxProps {
  phone?: string;
}

const ContactText = ({ id, color, children }: textProps) => {
  return (
    <Text
      as="h3"
      variant="title"
      textAlign="center"
      fontWeight="bold"
      color={color}
      id={id}
      lineHeight={1.5}
    >
      {children}
    </Text>
  );
};

export const QueryContact = ({ phone, ...props }: QueryContactProps) => {
  return (
    <Box py="3rem" {...props}>
      <Grid gridAutoFlow="column" gridGap={3} alignItems="center" justifyContent="center">
        <ContactText id="quick.delivery.query.textus" color="mahogany.500" />
        <a href={`sms:${phone}`}>
          <Phone color="applegreen.500" phoneNo={phone} variant="title" lineHeight={1.5} my={0} />
        </a>
        <ContactText id="quick.delivery.query.with" color="mahogany.500" />
      </Grid>
      <ContactText id="quick.delivery.query.query" color="mahogany.500" />
    </Box>
  );
};
