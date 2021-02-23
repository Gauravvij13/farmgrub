import React, { useCallback, useMemo, FC } from 'react';
import { Flex } from 'atoms/Flex';
import useCart from 'pages/cart/context/CartContext';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';
import { LocaleString } from 'locales';

const stages = ['cart', 'address', 'delivery', 'payment', 'confirm'];

export type CartStageBreadCrumProps = {
  onNext(): void;
};

export const CartStageBreadCrum: FC<CartStageBreadCrumProps> = ({ onNext }) => {
  /**
   * "stage" represents current stage shown
   * "cartStage" represents current order stage at backend
   */
  const {
    state: { stage, cartStage, nextDisable },
    actions: { handleCheckout, checkoutUpdate },
  } = useCart();

  const isOnLatest = useMemo(() => stage === cartStage, [stage, cartStage]);

  const changeStage = useCallback(
    newStage => () => {
      const nextStageIndex = stages.indexOf(newStage);
      const currentCartIndex = stages.indexOf(cartStage);

      if (nextStageIndex < currentCartIndex) {
        handleCheckout(newStage);
      } else if (
        ((isOnLatest && nextStageIndex === currentCartIndex + 1) ||
          (!isOnLatest && nextStageIndex === currentCartIndex)) &&
        typeof onNext === 'function'
      ) {
        if (stage === 'cart') {
          checkoutUpdate();
        } else {
          onNext();
        }
      }
    },
    [handleCheckout, cartStage, isOnLatest, checkoutUpdate, onNext, stage],
  );

  const color = useCallback(
    (index: number) => {
      if (index === stages.indexOf(stage)) {
        return 'gray.800';
      }

      if (
        (isOnLatest && index === stages.indexOf(cartStage) + 1 && !nextDisable) ||
        (!isOnLatest && index === stages.indexOf(cartStage))
      ) {
        return 'primary.500';
      }
      if (index <= stages.indexOf(cartStage)) {
        return 'gray.800';
      }
      return 'gray.500';
    },
    [cartStage, stage, nextDisable, isOnLatest],
  );

  return (
    <Flex alignItems="center" justifyContent="center">
      {stages.map((item, index) => (
        <React.Fragment key={item}>
          {index !== 0 && <Box mx={2}>&gt;</Box>}
          <Text
            fontFamily="title"
            fontSize="small"
            fontWeight={item === stage ? 'bold' : 'initial'}
            cursor={
              index <= stages.indexOf(cartStage) || (isOnLatest && !nextDisable)
                ? 'pointer'
                : 'default'
            }
            color={color(index)}
            id={`cart.stage.${item}` as LocaleString}
            textDecoration={
              (index !== stages.indexOf(stage) && index < stages.indexOf(cartStage)) ||
              (isOnLatest && index === stages.indexOf(cartStage) + 1 && !nextDisable) ||
              (!isOnLatest && index === stages.indexOf(cartStage))
                ? 'underline'
                : undefined
            }
            onClick={changeStage(item)}
            mx={2}
          />
        </React.Fragment>
      ))}
    </Flex>
  );
};
