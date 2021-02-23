import React, { FC } from 'react';
import { Box } from 'atoms/Box';
import Div100vh from 'react-div-100vh';
import { Spinner } from 'atoms/Spinner';
import { Flex } from 'atoms/Flex';

const SIZES = {
  small: '4rem',
  medium: '6rem',
  large: '10rem',
};

type LoaderProps = {
  size?: keyof typeof SIZES;
};

export const Loader: FC<LoaderProps> = ({ size }) => {
  return (
    <Div100vh>
      <Flex height="100%" width="100%" alignItems="center" justifyContent="center">
        <Box
          height={size ? SIZES[size] : 'small'}
          backgroundColor="white.0"
          width={size ? SIZES[size] : 'small'}
        >
          <Spinner color="primary.500" />
        </Box>
      </Flex>
    </Div100vh>
  );
};

Loader.defaultProps = {
  size: 'small',
};
