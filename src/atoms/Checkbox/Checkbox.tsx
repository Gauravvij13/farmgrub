import React, { MouseEvent, FC } from 'react';
import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Icon } from 'molecules/Icon';
import { Spinner } from 'atoms/Spinner';

export type CheckboxProps = {
  checked: boolean;
  onChange?(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
  loading?: boolean;
};
export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, loading }) => {
  return (
    <Flex
      maxWidth="2.4rem"
      maxHeight="2.4rem"
      onClick={loading ? undefined : onChange}
      cursor="pointer"
    >
      <Box
        width="2.4rem"
        height="2.4rem"
        border="0.1rem solid"
        borderColor={checked ? 'applegreen.500' : 'steelgrey.50'}
        borderRadius="0.2rem"
        bg="offwhite.0"
      />
      {checked && !loading && (
        <Icon
          name="check"
          height={6}
          width={6}
          fill="grassygreen.500"
          position="absolute"
          left="0.2rem"
          top="0.3rem"
        />
      )}
      {loading && (
        <Box height={6} width={6} position="absolute" left="0.2rem" top="0.3rem">
          <Spinner color="primary.500" />
        </Box>
      )}
    </Flex>
  );
};
