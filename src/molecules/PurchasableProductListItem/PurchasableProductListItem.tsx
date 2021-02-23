import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from 'atoms/Box';
import { Product } from 'generated/graphql-hooks';
import ProductListItemNotify from 'molecules/ProductListItemNotify';

import useAuth from 'contexts/Authentication';
import { ProductListItem } from '../ProductListItem';

type PurchasableProductListItemProps = {
  product: Product;
};

const BoxStyle = styled(Box)<BoxProps>`
  > a {
    .product-card {
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.pale[6]} !important;
      }
    }
  }
`;

export const PurchasableProductListItem = ({ product }: PurchasableProductListItemProps) => {
  const productName = useMemo(() => {
    if (product?.name && product?.name.length > 16) {
      return product?.name?.substring(0, 16).concat('…');
    }
    return product?.name;
  }, [product]);

  const {
    state: { user },
  } = useAuth();

  const stockNotifications = useMemo(() => user?.pendingStockNotifications || [], [user]);

  const notificationId = useMemo(
    () => stockNotifications?.find(n => n?.variant?.product?.id === product?.id)?.id,
    [stockNotifications, product],
  );

  const priceTag = useMemo<string | null | undefined>(
    () =>
      product?.productProperties?.find(property => property?.property?.name === 'standard_price')
        ?.value,
    [product],
  );

  return (
    <BoxStyle
      height={177}
      width={130}
      bg="white"
      border="1px solid"
      borderColor="pale.500"
      borderRadius="0.4rem"
    >
      {!product?.defaultVariant?.purchasable || !product?.isAvailable ? (
        <ProductListItemNotify
          id={product?.id!}
          images={product?.images}
          notificationId={notificationId}
        />
      ) : (
        <ProductListItem
          id={product?.id!}
          name={productName}
          amount={product?.amount}
          images={product?.images}
          priceTag={priceTag}
        />
      )}
    </BoxStyle>
  );
};
