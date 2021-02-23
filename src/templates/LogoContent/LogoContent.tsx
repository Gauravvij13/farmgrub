import React, { FC } from 'react';
import { WithBackButton } from 'templates/WithBackButton';
import { Flex } from 'atoms/Flex';
import { Grid } from 'atoms/Grid';
import { LogoImage } from 'pages/auth/atoms/LogoImage';

export type LogoContentProps = {
  hideBackButton?: boolean;
};

export const LogoContent: FC<LogoContentProps> = ({ children, hideBackButton }) => {
  return (
    <WithBackButton hideBackButton={hideBackButton}>
      <Flex height="100%" justifyContent="center" flexDirection="column">
        <Grid>
          <LogoImage />
          {children}
        </Grid>
      </Flex>
    </WithBackButton>
  );
};
