import React from 'react';
import Div100vh from 'react-div-100vh';
import { Heading } from 'atoms/Heading';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { FooterContainer } from 'pages/auth/atoms/FooterContainer';
import { NavLink } from 'react-router-dom';

export const VerifyFailedMessage = () => {
  return (
    <Div100vh>
      <Flex height="100%" justifyContent="center" flexDirection="column">
        <Heading textAlign="center" alignSelf="center" text="signin.verifyfailedmessage" />
        <FooterContainer>
          <Text variant="field" color="mahogany.500" id="signin.signinmessage" />
          <NavLink to="/zipcode" style={{ textDecoration: 'none' }}>
            <Text
              variant="field"
              color="dirtyblue.500"
              textTransform="uppercase"
              fontWeight="bold"
              id="signin.signinbutton"
            />
          </NavLink>
        </FooterContainer>
      </Flex>
    </Div100vh>
  );
};
