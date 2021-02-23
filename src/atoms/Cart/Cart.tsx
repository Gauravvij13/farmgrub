import React, { MouseEvent } from 'react';
import { Flex } from 'atoms/Flex';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Image } from 'atoms/Image';
import { BoxProps } from 'atoms/Box';

import CartIcon from 'assets/images/emptycart.svg';

export interface CartProps extends BoxProps {
  number?: number | null;
  onClick?(e: MouseEvent<HTMLDivElement>): void;
}

export const Cart = ({ number, onClick, ...props }: CartProps) => {
  return (
    <Grid {...props} onClick={onClick} cursor="pointer">
      <Image src={CartIcon} height={{ xs: 25 }} width={{ xs: 25 }} alt="empty cart icon" />
      {number ? (
        <Flex
          position="absolute"
          left="1.6rem"
          top="0.2rem"
          backgroundColor="darklavender.500"
          height={20}
          width={20}
          borderRadius="2rem"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="h3" variant="smallBold" color="white">
            {number}
          </Text>
        </Flex>
      ) : null}
    </Grid>
  );
};

Cart.defaultProps = {
  number: 0,
};
