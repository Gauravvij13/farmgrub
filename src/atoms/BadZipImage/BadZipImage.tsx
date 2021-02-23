/* eslint-disable global-require */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

const BaseImage = styled(Box)<BoxProps>`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
`;
export const BadZipImage: FC<BoxProps> = props => {
  return (
    <BaseImage
      src={require('../../assets/images/notfound/bad-zip.png')}
      srcSet={`
        ${require('../../assets/images/notfound/bad-zip.png')} 500w, 
        ${require('../../assets/images/notfound/bad-zip-2x.png')} 1000w,
        ${require('../../assets/images/notfound/bad-zip-3x.png')} 1500w
     `}
      width="40%"
      alt="logo"
      display="block"
      {...props}
    />
  );
};
BadZipImage.defaultProps = {
  as: 'img',
};
