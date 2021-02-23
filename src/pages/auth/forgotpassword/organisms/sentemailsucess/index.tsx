import React from 'react';
import { LogoContent } from 'templates/LogoContent/LogoContent';
import { Box } from 'atoms/Box';
import { Header } from 'molecules/Header';
import { FooterRedirect } from 'molecules/FooterRedirect';

export const SentEmailSuccess = () => {
  return (
    <LogoContent>
      <Box mt={{ xs: '42px' }} px={{ xs: 16 }}>
        <Header
          heading="forgotpassword.sentemail.success"
          subheading="forgotpassword.sentemail.desc"
        />
      </Box>
      <FooterRedirect text="forgotpassword.footer.desc" to="/zipcode" />
    </LogoContent>
  );
};
