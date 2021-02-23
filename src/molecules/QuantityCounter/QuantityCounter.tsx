import React, { useState, useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import { Grid } from 'atoms/Grid';
import { BoxProps } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Icon } from 'molecules/Icon';
import { isNumber } from 'util';
import useVisibleState from 'hooks/useVisibleState';
import { ButtonText } from 'atoms/ButtonText';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    width: '100%',
    maxWidth: '30rem',
    height: 'max-content',
    margin: 'auto',
  },
};

export interface QuantityCounterProps extends BoxProps {
  initialValue?: number | string | null;
  onChange?(value: number): void;
  maxQuantity?: number | null;
  errorQty?: number;
  productName: string;
}
export const QuantityCounter = ({
  initialValue,
  onChange,
  maxQuantity,
  errorQty,
  productName,
}: QuantityCounterProps) => {
  const [cartCount, setCartCount] = useState<number>(Number(initialValue) || 0);

  const { visible, show, hide } = useVisibleState();

  useEffect(() => {
    setCartCount(Number(initialValue) || 0);
  }, [initialValue]);

  const handleChange = useCallback(
    (action: 'dec' | 'inc') => () => {
      if (action === 'inc') {
        if (maxQuantity === undefined || (isNumber(maxQuantity) && maxQuantity > cartCount)) {
          if (typeof onChange === 'function') {
            onChange(cartCount + 1);
          }
          setCartCount(prevState => prevState + 1);
        } else {
          show();
        }
      } else {
        if (typeof onChange === 'function') {
          onChange(cartCount <= 0 ? 0 : cartCount - 1);
        }
        setCartCount(prevState => (prevState <= 0 ? 0 : prevState - 1));
      }
    },
    [setCartCount, onChange, cartCount, maxQuantity, show],
  );

  return (
    <>
      <Grid>
        <Grid
          bg="offwhite.0"
          height="4rem"
          maxWidth="25rem"
          alignItems="center"
          border="1px solid"
          borderColor={errorQty !== undefined ? 'darkorange.500' : 'steelgrey.500'}
          justifyContent="space-between"
          gridTemplateColumns="auto auto auto"
        >
          <Icon
            name="minus"
            width="3rem"
            height="3.8rem"
            px="0.8rem"
            fill="applegreen.500"
            onClick={handleChange('dec')}
            cursor="pointer"
          />
          <Text textAlign="center" variant="titleBold" color="steelgrey.500" my={0}>
            {`${cartCount}`}
          </Text>

          <Icon
            width="3rem"
            height="3.8rem"
            px=".8rem"
            name="plus"
            fill="applegreen.500"
            onClick={handleChange('inc')}
            cursor="pointer"
          />
        </Grid>
        {errorQty !== undefined && (
          <Text
            id={errorQty ? 'product.low.quantity' : 'product.no.quantity'}
            color="darkorange.500"
            variant="smallBold"
            values={{ qty: errorQty }}
          />
        )}
      </Grid>

      {visible && (
        <Modal
          isOpen
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={hide}
          shouldCloseOnOverlayClick={false}
        >
          <Text
            id="product.maxquantity.error.heading"
            variant="title"
            fontWeight="600"
            color="gray.900"
            my={0}
          />
          <Text
            id={maxQuantity ? 'product.maxquantity.error' : 'product.noquantity.error'}
            variant="body"
            color="gray.900"
            lineHeight="2.2rem"
            values={{
              qty: maxQuantity || 0,
              name: productName,
            }}
          />
          <Grid justifyContent="end">
            <ButtonText title="message.modal.ok" onClick={hide} />
          </Grid>
        </Modal>
      )}
    </>
  );
};
QuantityCounter.defaultProps = {
  initialValue: 0,
};
