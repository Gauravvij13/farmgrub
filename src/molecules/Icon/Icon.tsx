import React, { FC, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { get } from 'lodash';
// @ts-ignore
import { MorphReplaceResize } from 'react-svg-morph';
import { Box, BoxProps } from 'atoms/Box';
import { system } from 'styled-system';

import {
  Show,
  Hide,
  HamburgerMenu,
  Search,
  Close,
  Minus,
  Plus,
  Check,
  Delete,
  CreditCard,
  RightArrow,
  LeftArrow,
  FGLogo,
  WarningIcon,
} from './atoms';

interface IconWrapperProps extends BoxProps {
  fill?: string;
  color?: string;
}

export const IconWrapper = styled(Box)<IconWrapperProps>`
  display: grid;
  & > svg {
    height: 100%;
    width: 100%;
    ${system({
      fill: {
        property: 'fill',
        scale: 'colors',
      },
    })}
  }
`;

export const icons = {
  show: Show,
  hide: Hide,
  hamburgerMenu: HamburgerMenu,
  search: Search,
  close: Close,
  minus: Minus,
  logo: FGLogo,
  plus: Plus,
  check: Check,
  delete: Delete,
  creditCard: CreditCard,
  rightArrow: RightArrow,
  leftArrow: LeftArrow,
  warningIcon: WarningIcon,
};

export interface IconProps extends IconWrapperProps {
  name: keyof typeof icons;
  fill?: string;
  morph?: boolean;
}

export const Icon: FC<IconProps> = ({
  name,
  morph,
  height = '1.2rem',
  width = '1.2rem',
  fill,
  ...props
}: IconProps) => {
  const IconSVG: any = useMemo(() => icons[name], [name]) as any;
  const theme: any = useTheme();
  if (morph === false) {
    return (
      <IconWrapper fill={fill} color={fill} height={height} width={width} {...props}>
        <IconSVG key={name} />
      </IconWrapper>
    );
  }
  return (
    <IconWrapper fill={fill} height={height} width={width} {...props}>
      <MorphReplaceResize width={width || 100} height={height || 100} rotation="none">
        <IconSVG key={name} fill={get(theme?.colors, fill as string)} />
      </MorphReplaceResize>
    </IconWrapper>
  );
};
Icon.defaultProps = {
  morph: false,
};
