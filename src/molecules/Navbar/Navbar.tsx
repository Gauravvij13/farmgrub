/* eslint-disable global-require */
import React, { useState, useCallback } from 'react';
import { useSpring } from 'react-spring';
import { Link, useHistory } from 'react-router-dom';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Flex } from 'atoms/Flex';

import { Scale } from 'atoms/Scale';
import { Image } from 'atoms/Image';
import { Icon } from 'molecules/Icon';
import { useSearchQuery } from 'hooks/useSearchQuery';
import { CartWithAdder } from 'organisms/CartWithNumber';
import Logo from 'assets/images/FG_logo.svg';

import { SearchBar } from './molecules/SearchBar';
import Menu from './molecules/Menu/Menu';

export const Navbar = React.memo(() => {
  const searchQuery = useSearchQuery();
  const [isSearchOpen, setIsSearchOpen] = useState(!!searchQuery);
  const [isVisible, setVisible] = useState(false);
  const styles = useSpring({
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    opacity: isVisible ? 1 : 0,
  });

  const history = useHistory();

  const handleMenuToggle = useCallback(() => {
    setVisible(!isVisible);
  }, [setVisible, isVisible]);

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
  }, [setIsSearchOpen, isSearchOpen]);

  const searchBarOnChange = useCallback(
    (query: string) => {
      if (query) {
        history.push(`/product-listing?q=${query}`);
      }
    },
    [history],
  );

  return (
    <>
      {isVisible && <Menu styles={styles} onClose={handleMenuToggle} />}
      <Box height="5.4rem" width="100%">
        <Grid
          px={10}
          py={10}
          gridTemplateColumns="1fr 10fr 1fr"
          justifyContent="space-between"
          alignItems="center"
          position="fixed"
          top={0}
          zIndex={3}
          bg="white"
          width={{ xs: '100vw', md: '71.8rem', xm: '89.8rem' }}
          borderBottom="1px solid"
          borderColor="offwhite.600"
          height="5.4rem"
        >
          <Flex justifyContent="center">
            <Scale>
              <Icon
                name="hamburgerMenu"
                height={7}
                width={7}
                fill="applegreen.500"
                onClick={handleMenuToggle}
                cursor="pointer"
              />
            </Scale>
          </Flex>
          <Box justifyContent="center">
            <Scale cursor="pointer" width="fit-content" m="auto">
              <Link to="/shop/main">
                <Image
                  src={Logo}
                  height={{ xs: '1.7rem' }}
                  alt="farmgrub"
                  justifySelf="center"
                  objectfit="scale-down"
                />
              </Link>
            </Scale>
            <Box position="absolute" right="1rem" top="-0.4rem">
              <Icon
                morph
                name="search"
                height={8}
                width={8}
                fill="primary.500"
                cursor="pointer"
                onClick={handleSearchToggle}
              />
            </Box>
            {isSearchOpen && (
              <Box position="absolute" width="100%" top="-1.9rem">
                <SearchBar onClose={handleSearchToggle} onChange={searchBarOnChange} />
              </Box>
            )}
          </Box>
          <Flex justifyContent="center">
            <Scale>
              <CartWithAdder />
            </Scale>
          </Flex>
        </Grid>
      </Box>
    </>
  );
});
