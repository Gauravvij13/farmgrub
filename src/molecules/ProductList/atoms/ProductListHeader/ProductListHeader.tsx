import React, { FC, MouseEvent } from 'react';
import { Flex } from 'atoms/Flex';
import { Text, TextProps } from 'atoms/Text';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type ProductListHeader = {
  heading: string;
  onViewAll?(e: MouseEvent<HTMLDivElement>): void;
  category?: string | null;
};

const TextLink = styled(Text)<TextProps>`
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.dirtyblue[4]};
  }
`;

export const ProductListHeader: FC<ProductListHeader> = ({ heading, onViewAll, category }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width={{ xs: '96vw', md: '69rem', xm: '88rem' }}
    >
      <NavLink to={`/shop/t/${category || ''}`}>
        <Text
          as="span"
          variant="titleBold"
          color="missiongreen.700"
          textTransform="capitalize"
          css={{ '&:hover': { textDecoration: 'underline' } }}
        >
          {heading}
        </Text>
      </NavLink>
      {onViewAll && (
        <NavLink to={`/shop/t/${category || ''}`}>
          <TextLink
            variant="body"
            color="dirtyblue.300"
            right="1.2rem"
            id="viewall"
            cursor="pointer"
            my="0rem"
          />
        </NavLink>
      )}
    </Flex>
  );
};
