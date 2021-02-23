import React, { FC, useCallback } from 'react';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { Spinner } from 'atoms/Spinner';
import { InputField } from 'molecules/InputField';
import useCart from 'pages/cart/context/CartContext';
import { useField } from 'formik';

export type PromoCodeInputProps = {
  loading?: boolean;
  onPromoApply: (arg: string) => void;
  onPromoRemove: () => void;
};

export const PromoCodeInput: FC<PromoCodeInputProps> = ({
  loading,
  onPromoApply,
  onPromoRemove,
}) => {
  const {
    state: { promoCode },
  } = useCart();

  const [{ value: promo, ...field }] = useField('promocode');

  const onSubmit = useCallback(() => {
    if (typeof onPromoApply === 'function') {
      onPromoApply(promo);
    }
  }, [promo, onPromoApply]);

  return (
    <>
      <Text
        as="h3"
        variant="body"
        color="steelgrey.500"
        fontWeight="500"
        id="checkout.promocode.input.heading"
        pb={10}
      />
      <Flex justifyContent="space-between" alignContent="flex-end">
        {promoCode ? (
          <Text variant="body" mb="0" textTransform="uppercase">
            {promoCode}
          </Text>
        ) : (
          <InputField placeholder="Enter Promo Code" value={promo} {...field} />
        )}
        <Flex pl="3rem">
          {loading && (
            <Box
              width="10px"
              height="10px"
              position="absolute"
              left="10px"
              bottom={promoCode ? '0.3rem' : '1.8rem'}
            >
              <Spinner color="primary.500" />
            </Box>
          )}
          <Text
            id={promoCode ? 'checkout.promocode.remove' : 'checkout.promocode.apply'}
            onClick={promoCode ? onPromoRemove : onSubmit}
            cursor="pointer"
            alignSelf="flex-end"
            variant="body"
            fontWeight="600"
            color="mahogany.500"
            mb={promoCode ? '0' : '1.5rem'}
            opacity={!promoCode && !promo ? 0.5 : 1}
          />
        </Flex>
      </Flex>
    </>
  );
};
