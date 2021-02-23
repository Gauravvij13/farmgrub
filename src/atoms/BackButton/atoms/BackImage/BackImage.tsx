/* eslint-disable global-require */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

const BaseImage = styled(Box)<BoxProps>`
  margin-left: auto;
  margin-right: auto;
`;
export const BackImage: FC<BoxProps> = props => {
  return (
    <BaseImage
      src={require('../../../../assets/images/back.png')}
      width={4}
      alt="back"
      display="block"
      {...props}
    />
  );
};
BackImage.defaultProps = {
  as: 'img',
};
