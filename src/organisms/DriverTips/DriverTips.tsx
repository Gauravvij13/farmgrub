import React, { useState, useCallback, useEffect, FC, useMemo } from 'react';
import { useFormikContext } from 'formik';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Chip } from 'atoms/Chip';
import useCart from 'pages/cart/context/CartContext';
import { FormNumberInput } from 'molecules/FormNumberInput';
import { useDriverTipsQuery, CartViewQuery, useCartViewQuery } from 'generated/graphql-hooks';

export type DriverTipType = {
  driverTip: { driverTipId: string; driverTipStyle: 'percent' | 'custom'; amount: number };
};

export type DriverTipProps = {
  data?: CartViewQuery['cart'];
  tipAmount?: number | null;
};

export const DriverTips: FC<DriverTipProps> = () => {
  const { data } = useDriverTipsQuery();
  const { data: cartData } = useCartViewQuery({ fetchPolicy: 'cache-only' });

  const { setFieldValue, errors, values } = useFormikContext<DriverTipType>();

  const [showInput, setShowInput] = useState(values.driverTip?.driverTipStyle === 'custom');

  const [selectedTipId, setSelectedTip] = useState(values.driverTip?.driverTipId || '1');

  const {
    state: { merchandiseTotal },
    actions: { updateCartState },
  } = useCart();

  // set first chip values if no driver tip selected
  useEffect(() => {
    if (values.driverTip === undefined && data) {
      const driverTip = {
        amount: merchandiseTotal * (data?.driverTips?.[0]?.amount || 0),
        driverTipStyle: data?.driverTips?.[0]?.tipStyle || 'percent',
        driverTipId: data?.driverTips?.[0]?.id || '1',
      };

      setFieldValue('driverTip', driverTip);
      if (data?.driverTips?.[0]?.amount) {
        updateCartState({
          driverTip,
        });
      }
    }
  }, [values.driverTip, setFieldValue, data, updateCartState, merchandiseTotal]);

  // original total from backend to calculate driver tip
  const staticCartTotal = useMemo<number>(
    () => (cartData?.cart?.total || 0) - (cartData?.cart?.driverTipTotal || 0),
    [cartData],
  );

  const handleSelectedDriverTip = useCallback(
    (id: string, tipStyle: string, amount?: number | null) => () => {
      // show input field if custom chip selected
      setShowInput(tipStyle === 'custom');
      setFieldValue('driverTip.driverTipId', id);
      setFieldValue(
        'driverTip.amount',
        tipStyle !== 'custom'
          ? merchandiseTotal * (amount || 0)
          : Number(values.driverTip?.amount)?.toFixed(2) || 0,
      );
      setFieldValue('driverTip.driverTipStyle', tipStyle);

      setSelectedTip(id);
    },
    [setSelectedTip, setFieldValue, merchandiseTotal, values.driverTip],
  );

  useEffect(() => {
    const { amount = 0 } = values.driverTip || {};
    updateCartState({
      nextDisable: !(!errors.driverTip?.amount || values.driverTip?.amount > 0),
      driverTip: values.driverTip,
      cartTotal:
        // eslint-disable-next-line no-restricted-globals
        staticCartTotal + (amount && !isNaN(amount) && Number(amount) >= 0 ? Number(amount) : 0),
    });
  }, [errors, updateCartState, values.driverTip, staticCartTotal]);

  if (data) {
    return (
      <Box borderBottom="1px solid" borderColor="pale.500" pb={20} pt={10}>
        <Text
          as="h3"
          variant="body"
          color="steelgrey.500"
          fontWeight="500"
          id="driver.tip.heading"
          pb={10}
        />
        <Grid
          gridTemplateColumns="repeat(auto-fit,minmax(100px,min-content))"
          justifyContent="start"
          gridGap="2rem"
        >
          {data?.driverTips.map(tip => (
            <Box
              key={tip?.id!}
              onClick={handleSelectedDriverTip(tip?.id!, tip?.tipStyle!, tip?.amount)}
            >
              <Chip
                variant={selectedTipId === tip?.id ? 'selected' : 'primary'}
                text={tip?.title!}
              />
            </Box>
          ))}
        </Grid>
        {showInput && (
          <Grid justifyContent="center" pt={20}>
            <Grid justifyContent="center" gridGap={10} gridAutoFlow="column">
              <FormNumberInput
                name="driverTip.amount"
                autoFocus
                label="driver.tip.enter.amount"
                type="text"
                inputMode="numeric"
              />
            </Grid>
          </Grid>
        )}
      </Box>
    );
  }
  return null;
};
