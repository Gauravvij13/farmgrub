import React, { FC, useCallback, useEffect, useState } from 'react';

import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { Icon } from 'molecules/Icon';
import { Spinner } from 'atoms/Spinner';

export type NotifyMeCheckboxProps = {
  loading?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  value?: boolean;
  controlled?: boolean;
};

export const NotifyMeCheckbox: FC<NotifyMeCheckboxProps> = ({
  loading,
  defaultChecked,
  onChange,
  value,
  controlled,
}) => {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  useEffect(() => {
    setChecked(!!value);
  }, [value]);

  const toggleChecked = useCallback(() => {
    if (typeof onChange === 'function') {
      onChange(!checked);
    }
    if (!controlled) {
      setChecked(c => !c);
    }
  }, [checked, onChange, controlled]);

  return (
    <Flex
      ml={6}
      onClick={!loading ? toggleChecked : undefined}
      cursor="pointer"
      alignItems="center"
    >
      <Box mr={4} height="max-content">
        <Box
          width="1.8rem"
          height="1.8rem"
          border="0.1rem solid"
          borderColor="darklavender.500"
          bg={checked && !loading ? 'darklavender.500' : 'offwhite.0'}
          borderRadius="0.3rem"
        />
        {checked && !loading && (
          <Icon
            name="check"
            fill="offwhite.0"
            padding={1}
            height="100%"
            width="100%"
            position="absolute"
            left={0}
            top={0}
          />
        )}
        {loading && (
          <Box height={4} width={4} position="absolute" left="0.2rem" top="0.3rem">
            <Spinner color="darklavender.500" />
          </Box>
        )}
      </Box>
      <Text
        id={checked ? 'product.notifymeactive' : 'product.notifyme'}
        color="darklavender.500"
        variant="small"
        maxWidth="9rem"
        lineHeight="1.4rem"
        as="span"
      />
    </Flex>
  );
};
