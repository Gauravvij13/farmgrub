import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

/**
  This component can be a wrapper of an linkable Image or Icon that will scale to zoom out on hover or focus. 
*/

export const Scale = styled(Box)<BoxProps>`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
