import React, { FC, useCallback, useState } from 'react';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { Icon } from 'molecules/Icon';
import { Button } from 'molecules/Button';
import { AnimatedMenu } from 'atoms/AnimatedMenu';
import { Supplier } from 'generated/graphql-hooks';

const WeigelLogo = require('assets/images/WeigelLogo.png');

export type WeigelFreeMilkModalProps = {
  visible?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
  supplier?: Pick<Supplier, 'id' | 'name'>;
};

export const WeigelFreeMilkModal: FC<WeigelFreeMilkModalProps> = ({
  visible,
  onClose,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const onClickHandler = useCallback(async () => {
    setLoading(true);
    if (typeof onSuccess === 'function') {
      await onSuccess();
    }
    setLoading(false);
    if (typeof onClose === 'function') {
      onClose();
    }
  }, [onSuccess, onClose]);

  if (!visible) {
    return <></>;
  }

  return (
    <AnimatedMenu>
      <Box
        backgroundColor="white"
        height="100vh"
        position="absolute"
        top="0"
        pt="2rem"
        right="0"
        width={{ xs: '100%', md: '40%' }}
        boxShadow="-5px 0 5px -5px #aaa"
      >
        <Grid padding="10px 30px" maxHeight="100vh" overflowY="auto">
          <Icon
            name="close"
            onClick={onClose}
            cursor="pointer"
            color="mahogany.500"
            height="1.6rem"
            width="1.7rem"
            justifySelf="right"
          />
          <Box>
            <Grid textAlign="center" gridGap={10}>
              <Image src={WeigelLogo} alt="Weigel logo" maxWidth="200px" mx="auto" />
              <Text
                id="weigelmodal.freemilk.heading"
                color="applegreen.500"
                fontFamily="roboto"
                fontSize="3.6rem"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.8px"
                my={0}
                lineHeight="3.6rem"
              />
              <Text
                id="weigelmodal.freemilk.description"
                color="mahogany.500"
                fontFamily="roboto"
                fontSize="1.6rem"
                lineHeight="2rem"
              />
              <Button
                title="weigelmodal.freemilk.button"
                borderRadius="full"
                variant="primary"
                onClick={onClickHandler}
                loading={loading}
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </AnimatedMenu>
  );
};
