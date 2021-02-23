/* eslint-disable global-require */
import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';

const BaseImage = styled(Box)<BoxProps>`
  margin-left: auto;
  margin-right: auto;
`;
export const LogoImage: FC<BoxProps> = props => {
  return (
    <BaseImage
      src={require('../../../../assets/images/splash/logo-1.png')}
      srcSet={`
        ${require('../../../../assets/images/splash/logo-1.png')} 500w, 
        ${require('../../../../assets/images/splash/logo-2.png')} 1000w,
        ${require('../../../../assets/images/splash/logo-3.png')} 1500w
     `}
      width={{ xs: '40%', md: '15rem' }}
      alt="logo"
      display="block"
      {...props}
    />
  );
};
LogoImage.defaultProps = {
  as: 'img',
  marginTop: 'auto',
};
