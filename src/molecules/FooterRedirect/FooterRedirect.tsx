import React from 'react';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { NavLink } from 'react-router-dom';
import { LocaleString } from 'locales';

export type FooterRedirectProps = {
  text?: LocaleString;
  to?: string;
  buttonText?: LocaleString;
};
export const FooterRedirect = ({ text, buttonText, to }: FooterRedirectProps) => {
  return (
    <Flex
      bg="offwhite.500"
      gridAutoFlow="column"
      justifyContent="center"
      alignItems="baseline"
      gridGap={{ xs: 2 }}
      mt={{ xs: 15 }}
      py={4}
      flexWrap="wrap"
    >
      {text && <Text variant="field" color="mahogany.500" id={text} />}
      {to && (
        <NavLink to={to} style={{ textDecoration: 'none' }}>
          <Text
            variant="field"
            color="dirtyblue.500"
            textTransform="uppercase"
            fontWeight="bold"
            id={buttonText}
          />
        </NavLink>
      )}
    </Flex>
  );
};

FooterRedirect.defaultProps = {
  buttonText: 'footerredirect.buttontext',
  to: '/zipcode',
};
