import React, { useState, useCallback } from 'react';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Price } from 'atoms/Price';
import { Supplier } from 'generated/graphql-hooks';
import { FarmDetail } from '../../../../organisms/FarmDetail';

type ProductDetailInfoProps = {
  tag?: string | null;
  name?: string | null;
  price?: string | null;
  farms?: Pick<Supplier, 'id' | 'name' | 'supportsLoyaltyCards'>[];
  totalPrice?: string | number | null;
  purchasable?: boolean | null;
  priceTag?: string | null;
};

export const ProductDetailInfo = ({
  name,
  price,
  farms,
  totalPrice,
  purchasable,
  priceTag,
}: ProductDetailInfoProps) => {
  const [selectedFarmId, setSelectedFarmId] = useState('');

  const handleModalState = useCallback(
    (id: string) => () => {
      setSelectedFarmId(id);
    },
    [setSelectedFarmId],
  );

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      px="1.6rem"
      maxWidth="42rem"
      pt={{ xs: '2.4rem', md: '0rem' }}
    >
      <Flex flexDirection="column" height="7.2rem" justifyContent="space-between">
        <Box>
          <Text variant="title" textTransform="capitalize" color="mahogany.500" my="0rem">
            {name}
          </Text>
          {Array.isArray(farms) && farms.length ? (
            <Box>
              <Flex flexDirection="row">
                <Text variant="body" color="mahogany.500" my="0.2rem" id="productdetailinfo.from" />

                {farms.map((farm, i) => (
                  <Text
                    key={farm.id || i}
                    variant="body"
                    textTransform="capitalize"
                    color="applegreen.500"
                    fontWeight="bold"
                    mx="0.5rem"
                    cursor="pointer"
                    onClick={handleModalState(farms[0]?.id!)}
                    my="0.2rem"
                  >
                    {farm?.name}
                    {i === farms.length - 1 ? '' : ', '}
                  </Text>
                ))}
              </Flex>
            </Box>
          ) : null}
        </Box>

        <Grid gridAutoFlow="column" justifyContent="space-between" alignItems="center">
          <Grid
            gridAutoFlow="column"
            justifyContent="start"
            alignItems="baseline"
            gridColumnGap="0.5rem"
          >
            <Price amount={price} variant="title" my="0rem" />
            {priceTag && (
              <Text
                color="mahogany.500"
                verticalAlign="center"
                variant="bodyBold"
                fontWeight="medium"
                my={0}
              >
                {priceTag}
              </Text>
            )}
          </Grid>
          <Box display={{ xs: 'block', md: 'none' }}>
            <Grid gridAutoFlow="column" alignItems="center" gridColumnGap="0.5rem">
              {purchasable && (
                <>
                  <Text
                    as="h3"
                    variant="bigBodyBold"
                    color="applegreen.500"
                    id="cartlistitem.total"
                  />

                  <Price
                    variant="bigBodyBold"
                    color="applegreen.500"
                    amount={totalPrice}
                    fontWeight="medium"
                  />
                </>
              )}
            </Grid>
          </Box>
        </Grid>
      </Flex>
      {selectedFarmId && (
        <FarmDetail isVisible onClose={handleModalState('')} farmId={selectedFarmId} />
      )}
    </Flex>
  );
};
