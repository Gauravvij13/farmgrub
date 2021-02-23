/* eslint-disable global-require */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

const BaseImage = styled(Box)<BoxProps>`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
`;
export const GoodZipImage: FC<BoxProps> = props => {
  return (
    <BaseImage
      src={require('../../assets/images/found/group180Copy.png')}
      srcSet={`
        ${require('../../assets/images/found/group180Copy.png')} 500w, 
        ${require('../../assets/images/found/group180Copy@2x.png')} 1000w,
        ${require('../../assets/images/found/group180Copy@3x.png')} 1500w
     `}
      width="40%"
      alt="logo"
      display="block"
      {...props}
    />
  );
};
GoodZipImage.defaultProps = {
  as: 'img',
};
