import React, { useContext, MouseEvent } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { useSpring, animated } from 'react-spring';

const AnimatedBox = animated(Box);
export type SwitchProps = {
  value: boolean;
  onChange?(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
};

export const Switch = ({ value, onChange }: SwitchProps) => {
  const theme = useContext(ThemeContext);
  const styles = useSpring({
    backgroundColor: value ? theme.colors.grassygreen[500] : theme.colors.offwhite[0],
    transform: value ? 'translateX(100%)' : 'translateX(0%)',
  });
  return (
    <Flex
      width="3.8rem"
      position="relative"
      justifyContent="center"
      alignItems="center"
      onClick={onChange}
    >
      <Box
        width="3.2rem"
        height="1.6rem"
        maxHeight="1.6rem"
        bg={value ? 'applegreen.500' : 'steelgrey.50'}
        borderRadius="0.8rem"
      />
      <AnimatedBox
        position="absolute"
        left="0"
        width="2rem"
        height="2rem "
        maxWidth="2rem"
        maxHeight="2rem"
        borderRadius="50%"
        boxShadow="0.1rem 0.1rem 0.2rem"
        style={styles}
      />
    </Flex>
  );
};
