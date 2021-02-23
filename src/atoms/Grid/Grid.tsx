import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

interface GridProps extends BoxProps {}
export const Grid = styled(Box)<GridProps>`
  display: grid;
`;
