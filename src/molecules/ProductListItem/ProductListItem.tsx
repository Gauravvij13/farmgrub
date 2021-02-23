import React, { FC } from 'react';
import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Image } from 'atoms/Image';
import { ProductInfo } from 'molecules/ProductListItem/molecules/ProductInfo';
import { NavLink } from 'react-router-dom';
import { Asset as ImageType } from 'generated/graphql-hooks';

type ProductListItemProps = {
  id: string;
  src?: string | null;
  name?: string | null;
  amount?: string | null;
  images?: Array<ImageType> | null;
  priceTag?: string | null;
};

export const ProductListItem: FC<ProductListItemProps> = ({
  images,
  id,
  name,
  amount,
  priceTag,
}) => {
  return (
    <NavLink to={`/shop/products/${id}`}>
      <Box
        height="100%"
        width="100%"
        borderRadius="0.4rem"
        style={{ cursor: 'pointer' }}
        className="product-card"
      >
        <Flex
          maxWidth={130}
          height="12rem"
          alignItems="center"
          justifyContent="center"
          backgroundColor="white"
          borderTopLeftRadius="0.4rem"
          borderTopRightRadius="0.4rem"
          px={2}
        >
          {images && (
            <Image
              src={images.length > 0 ? images[0].thumbnail : id}
              alt={images?.[0]?.altText}
              title={images?.[0]?.title}
              height="10rem"
              width="10rem"
              objectfit="scale-down"
              lazy
            />
          )}
        </Flex>
        <ProductInfo text={name} amount={amount} priceTag={priceTag} />
      </Box>
    </NavLink>
  );
};
