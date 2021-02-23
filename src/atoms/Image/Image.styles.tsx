import styled, { css } from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

export type BaseImageProps = {};

export const StyledImage = styled.img<BaseImageProps>`
  width: 100%;
  height: 100%;
`;

export interface BaseWrapperProps extends BoxProps {
  objectfit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | 'initial';
}

export const ImageWrapper: any = styled(Box)<BaseWrapperProps>`
  ${({ objectfit }) =>
    css`
      img {
        object-fit: ${objectfit || 'initial'};
      }
    `}
`;
