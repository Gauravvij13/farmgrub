/* eslint-disable no-param-reassign */
import React, { useState, useCallback, useMemo } from 'react';
import { Flex } from 'atoms/Flex';
import styled from 'styled-components';
import { Text } from 'atoms/Text';
import { FarmDetail } from 'organisms/FarmDetail';
import { Taxon } from 'generated/graphql-hooks';

type FarmListItemProps = {
  farmId?: string | null;
  farmname?: string | null;
  city?: string | null;
  state?: string | null;
  farmProducts?: Array<Taxon> | null;
};
const FlexStyle = styled(Flex)`
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pale[0]};
  }
`;
export const FarmListItem = ({
  farmId,
  farmname,
  city,
  state,
  farmProducts,
}: FarmListItemProps) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState('');

  const handleModalToggle = useCallback(
    id => {
      setVisible(!isVisible);
      setSelectedFarmId(id);
    },
    [setVisible, isVisible],
  );

  const products = useMemo(() => {
    const productItemlist = farmProducts?.reduce((productItems, current, index, arr) => {
      if (arr.length === 1) {
        productItems = current?.name!;
      }
      if (arr.length > 1) {
        productItems += current?.name!;
        if (index === arr.length - 2) {
          productItems += ' and ';
        } else if (index !== arr.length - 1) {
          productItems += ', ';
        }
      }
      return productItems;
    }, '');
    return productItemlist;
  }, [farmProducts]);

  return (
    <>
      {isVisible && selectedFarmId && (
        <FarmDetail isVisible={isVisible} onClose={handleModalToggle} farmId={selectedFarmId} />
      )}
      <FlexStyle pl="1.6rem" pr="2.4rem" onClick={() => handleModalToggle(farmId)} cursor="pointer">
        <Text variant="body" color="applegreen.500" fontWeight="bold" lineHeight="2rem">
          {farmname}
          <Text as="span" variant="body" color="mahogany.500" fontWeight="bold" px="0.5rem">
            - {city} {state} -
          </Text>
          <Text as="span" variant="body" color="mahogany.500">
            {products || 'N/A'}
          </Text>
        </Text>
      </FlexStyle>
    </>
  );
};
