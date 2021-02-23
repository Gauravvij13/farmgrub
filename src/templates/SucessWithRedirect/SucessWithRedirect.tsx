import React, { FC } from 'react';
import { LogoContent, LogoContentProps } from 'templates/LogoContent';
import { Box } from 'atoms/Box';
import { Header, HeaderProps } from 'molecules/Header';
import { FooterRedirect, FooterRedirectProps } from 'molecules/FooterRedirect';

type SuccessWithRedirectProps = {
  headerProps: HeaderProps;
  footerProps: FooterRedirectProps;
  containerProps?: LogoContentProps;
};

export const SuccessWithRedirect: FC<SuccessWithRedirectProps> = ({
  headerProps,
  footerProps,
  containerProps,
}) => {
  return (
    <LogoContent {...containerProps}>
      <Box mt={{ xs: '42px' }} px={{ xs: 16 }}>
        <Header {...headerProps} />
      </Box>
      <FooterRedirect {...footerProps} />
    </LogoContent>
  );
};
