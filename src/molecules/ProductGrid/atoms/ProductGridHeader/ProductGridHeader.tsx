import React, { FC } from 'react';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { NavLink } from 'react-router-dom';

type ProductGridHeader = {
  heading: string;
  showViewAll?: boolean;
};
export const ProductGridHeader: FC<ProductGridHeader> = ({ heading, showViewAll }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" width="100%">
      <Text as="span" variant="titleBold" color="mahogany.500">
        {heading}
      </Text>
      {showViewAll && (
        <NavLink to="/product-listing">
          <Text variant="body" color="dirtyblue.300" right="12px" id="viewall" />
        </NavLink>
      )}
    </Flex>
  );
};
