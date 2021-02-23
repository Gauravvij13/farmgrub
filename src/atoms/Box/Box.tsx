import styled, { css as scCss } from 'styled-components';
import systemCss, { SystemStyleObject } from '@styled-system/css';

import {
  color,
  layout,
  grid,
  space,
  PositionProps,
  position,
  background,
  ColorProps,
  border,
  shadow,
  LayoutProps,
  SpaceProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  ShadowProps,
} from 'styled-system';

export type BoxProps = {
  ref?: any;
  color?: string;
  as?: any;
  children?: React.ReactNode;
  onClick?(e: any): void;
  cursor?: string;
  /**
   * Used to add some css, you it will also be compatible with the theme.
   */
  css?: SystemStyleObject;
} & ColorProps &
  LayoutProps &
  SpaceProps &
  GridProps &
  PositionProps &
  BorderProps &
  BackgroundProps &
  TypographyProps &
  FlexboxProps &
  ShadowProps;
export const Box = styled.div<BoxProps>`
position: relative;
${space}
${color}
${layout}
${background}
${position}
${grid}
${border}
${typography}
${flexbox}
${shadow}
${({ css }) => css && systemCss(css)}
${({ cursor }) =>
  cursor &&
  scCss`
    cursor: ${cursor};
  `}
`;
