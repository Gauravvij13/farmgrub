/* eslint-disable global-require */
import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { LocaleString } from 'locales';
import useAuth from 'contexts/Authentication';
import { useStoreQuery } from 'generated/graphql-hooks';
import FooterLogo from 'assets/images/farmgrub_footer-logo.svg';
import { MenuList, GuestMenuList } from 'molecules/Navbar/molecules/Menu/Menu';

type MenuListItem = {
  to: LinkProps['to'];
  id: LocaleString;
};

const scrollTop = () => window.scrollTo(0, 0);

const MenuItems = ({ to, id }: MenuListItem) => {
  return (
    <Box>
      <Link to={to} onClick={scrollTop}>
        <Text variant="body" color="offwhite.0" letterSpacing="0.3px" id={id} my={0} />
      </Link>
    </Box>
  );
};

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const { data } = useStoreQuery();

  return (
    <Grid justifyItems="center" bg="darklavender.600" p={24} gridGap={12} alignSelf="end">
      <Link to="/shop/main" onClick={scrollTop}>
        <img src={FooterLogo} alt="farmgrub logo" />
      </Link>
      <Grid
        gridAutoFlow={{ md: 'column' }}
        gridGap={18}
        py="1em"
        gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'auto' }}
      >
        {(isLoggedIn ? MenuList : GuestMenuList).map(list => {
          return <MenuItems to={list.to} id={list.id} key={list.id} />;
        })}
      </Grid>
      <Flex>
        <Box cursor="pointer">
          <a href={data?.store.facebook || undefined} target="_blank" rel="noopener noreferrer">
            <img
              src={require('../../assets/images/fb/fb.png')}
              srcSet={`
                  ${require('../../assets/images/fb/fb.png')} 500w, 
                  ${require('../../assets/images/fb/fb@2x.png')} 1000w,
                  ${require('../../assets/images/fb/fb@3x.png')} 1500w
              `}
              width="32px"
              alt="facebook icon"
            />
          </a>
        </Box>
        <Box ml={10}>
          <Box cursor="pointer">
            <a href={data?.store.instagram || undefined} target="_blank" rel="noopener noreferrer">
              <img
                src={require('../../assets/images/insta/insta.png')}
                srcSet={`
                  ${require('../../assets/images/insta/insta.png')} 500w, 
                    ${require('../../assets/images/insta/insta@2x.png')} 1000w,
                    ${require('../../assets/images/insta/insta@3x.png')} 1500w
                `}
                width="32px"
                alt="instagram icon"
              />
            </a>
          </Box>
        </Box>
      </Flex>
      <Text
        color="offwhite.0"
        display="grid"
        gridAutoFlow="column"
        variant="body"
        gridGap={2}
        as="div"
      >
        <Text id="footer.copyright" my={0} />
        <Text my={0}>-</Text>
        <Link to="/terms-of-services">
          <Text id="term.services.link" color="offwhite.0" my={0} />
        </Link>
      </Text>
    </Grid>
  );
};
