import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'atoms/Flex';
import { Tab } from 'molecules/Tab';
import { CategoryType } from 'typings/categories';

const TabListContainer = styled(Flex)`
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    &.active {
      button {
        background-color: ${props => props.theme.colors.darklavender[6]} !important;
      }
    }
  }
`;

interface TabListProps {
  data: Array<CategoryType>;
}
export const TabList: FC<TabListProps> = ({ data }) => {
  return (
    <>
      <TabListContainer width="100%" style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        {data.map(({ id, name }) => {
          return (
            <NavLink to={`/shop/t/${id}`} style={{ width: '100%' }} key={id}>
              <Tab title={name} />
            </NavLink>
          );
        })}
      </TabListContainer>
    </>
  );
};
