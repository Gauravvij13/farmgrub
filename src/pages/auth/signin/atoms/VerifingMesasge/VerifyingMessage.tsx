import React from 'react';
import Div100vh from 'react-div-100vh';
import { Flex } from 'atoms/Flex';
import { Heading } from 'atoms/Heading';

export const VerifyingMessage = () => {
  return (
    <Div100vh>
      <Flex justifySelf="center" height="100%" alignItems="center" justifyContent="center">
        <Heading text="signin.verifyingmessage" />
      </Flex>
    </Div100vh>
  );
};
