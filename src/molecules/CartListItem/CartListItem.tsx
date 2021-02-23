import React, { useCallback, useMemo } from 'react';
import _ from 'lodash';
import { Grid } from 'atoms/Grid';
import { Box } from 'atoms/Box';
import { Image } from 'atoms/Image';
import { Text } from 'atoms/Text';
import { QuantityCounter } from 'molecules/QuantityCounter';
import { Price } from 'atoms/Price';
import { NavLink } from 'react-router-dom';
import { Adjustment } from 'generated/graphql-hooks';

export type CartListItemProps = {
  image?: string | null;
  imageAlt?: string | null;
  imageTitle?: string | null;
  name?: string | null;
  amount?: string | number | null;
  initialQuantity?: number | null;
  onQuantityChange?(value: number): any;
  productId?: string;
  maxQuantity?: number | null;
  errorQty?: number;
  priceTag?: string | null;
  adjustments?: Adjustment[];
};

export const CartListItem = ({
  image,
  imageAlt,
  imageTitle,
  name,
  onQuantityChange,
  initialQuantity = 0,
  productId,
  amount,
  maxQuantity,
  priceTag,
  adjustments,
  errorQty,
}: CartListItemProps) => {
  const handleInternalOnChange = useCallback(
    (value: number) => {
      if (typeof onQuantityChange === 'function') {
        onQuantityChange(value);
      }
    },
    [onQuantityChange],
  );

  const handleRemove = useCallback(() => {
    if (typeof onQuantityChange === 'function') {
      onQuantityChange(0);
    }
  }, [onQuantityChange]);

  const productDiscountAdjustments = useMemo(
    () =>
      adjustments?.filter(
        adjustment =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      ) || [],
    [adjustments],
  );

  const productDiscount = useMemo(
    () => productDiscountAdjustments.reduce((acc, curr) => acc + curr.amount, 0),
    [productDiscountAdjustments],
  );

  const productDiscountName = useMemo(
    // @ts-ignore
    () => productDiscountAdjustments?.[0]?.source?.promotion?.name || '',
    [productDiscountAdjustments],
  );

  return (
    <Grid
      gridTemplateColumns="1fr 2fr 1fr"
      bg="offwhite.0"
      pl="0.6rem"
      pr="1.6rem"
      alignItems="center"
    >
      <NavLink to={`shop/products/${productId}`}>
        <Image
          src={image}
          alt={imageAlt}
          title={imageTitle}
          width="10rem"
          height="10rem"
          objectfit="scale-down"
          p="1rem"
        />
      </NavLink>
      <Box mx="1rem">
        <Text variant="bodyBold" fontWeight="bold" my="0rem" color="mahogany.500">
          {name}
        </Text>
        <Grid>
          <Grid
            gridAutoFlow="column"
            justifyContent="start"
            alignItems="baseline"
            gridColumnGap="0.5rem"
          >
            <Price
              amount={amount}
              variant="small"
              my="0rem"
              discountedPrice={
                productDiscount &&
                Number(amount || 0) - Math.abs(productDiscount / (initialQuantity || 1))
              }
            />

            {priceTag && (
              <Text as="span" variant="small" color="mahogany.500" my="0rem">
                {priceTag}
              </Text>
            )}
          </Grid>
          {productDiscount ? (
            <em>
              <Text as="span" variant="small" color="mahogany.500">
                {productDiscountName}
              </Text>
            </em>
          ) : null}
        </Grid>
        <Text
          onClick={handleRemove}
          cursor="pointer"
          pt={0}
          as="p"
          variant="body"
          id="cartlistitem.remove.item"
          mb={0}
          pb={0}
          textDecoration="underline"
          width="fit-content"
          whiteSpace="nowrap"
        />
      </Box>
      <QuantityCounter
        initialValue={initialQuantity}
        onChange={_.debounce(handleInternalOnChange, 500)}
        maxQuantity={maxQuantity}
        productName={name || ''}
        errorQty={errorQty}
      />
    </Grid>
  );
};
