import React from 'react';

import { animated } from 'react-spring';
import { Flex } from 'atoms/Flex';

const AnimatedFlex = animated(Flex);

type AnimatiedMenuProps = {
  styles?: Record<string, any>;
  children?: React.ReactNode;
  backgroundColor?: string;
};

export const AnimatedMenu = ({ children, styles, backgroundColor }: AnimatiedMenuProps) => {
  return (
    <AnimatedFlex
      position="fixed"
      height="100vh"
      width={{ xs: '100vw', md: '72rem', xm: '90rem' }}
      style={styles}
      top={0}
      bg={backgroundColor!}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      zIndex="modal"
    >
      {children || null}
    </AnimatedFlex>
  );
};
