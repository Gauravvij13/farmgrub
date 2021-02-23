import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

export interface FlexProps extends BoxProps {}
export const Flex = styled(Box)<FlexProps>`
  display: flex;
`;
