import React, { MouseEvent } from 'react';
import { Text } from 'atoms/Text';
import { Icon } from 'molecules/Icon';
import { NavLink } from 'react-router-dom';
import useAuth from 'contexts/Authentication';
import { AnimatedMenu } from 'atoms/AnimatedMenu';

import { Box, BoxProps } from 'atoms/Box';
import styled from 'styled-components';
import { LocaleString } from 'locales';
import { Scale } from 'atoms/Scale';
import { MenuLogo } from './MenuLogo';

type MenuListItem = {
  to: string;
  id: LocaleString;
  onClick?(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
};
type MenuListType = MenuListItem[];
export const MenuList: MenuListType = [
  {
    to: '/shop/main',
    id: 'menu.shop',
  },
  {
    to: '/account',
    id: 'menu.account',
  },
  {
    to: '/orders',
    id: 'menu.orders',
  },
  {
    to: '/quickdelivery',
    id: 'menu.quick.delivery',
  },
  {
    to: '/farms',
    id: 'menu.farms',
  },
  {
    to: '/mission',
    id: 'menu.mission',
  },
  {
    to: '/contact',
    id: 'menu.contact',
  },
];
export const GuestMenuList: MenuListType = [
  {
    to: '/shop/main',
    id: 'menu.shop',
  },

  {
    to: '/quickdelivery',
    id: 'menu.quick.delivery',
  },

  {
    to: '/farms',
    id: 'menu.farms',
  },
  {
    to: '/mission',
    id: 'menu.mission',
  },
  {
    to: '/contact',
    id: 'menu.contact',
  },
  {
    to: '/landing',
    id: 'menu.signin.signup',
  },
];

type MenuProps = {
  onClose(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
  styles?: Record<string, any>;
};

const BoxStyle = styled(Box)<BoxProps>`
  a {
    &.active,
    &:hover {
      p {
        color: ${props => props.theme.colors.secondary[6]};
      }
    }
  }
`;

const MenuItems = ({ to, id, onClick }: MenuListItem) => {
  return (
    <BoxStyle>
      <NavLink to={to} onClick={onClick}>
        <Text variant="title" fontWeight="medium" color="offwhite.0" id={id} />
      </NavLink>
    </BoxStyle>
  );
};

const Menu = ({ onClose, styles }: MenuProps) => {
  const {
    state: { isLoggedIn },
  } = useAuth();
  return (
    <AnimatedMenu styles={styles!} backgroundColor="primary.500">
      <Scale position="absolute" top={15} right={15} onClick={onClose}>
        <Icon name="close" height={20} width={20} fill="white" cursor="pointer" />
      </Scale>
      <MenuLogo />
      {(isLoggedIn ? MenuList : GuestMenuList).map(list => {
        return <MenuItems to={list.to} id={list.id} key={list.id} onClick={onClose} />;
      })}
    </AnimatedMenu>
  );
};

export default Menu;
