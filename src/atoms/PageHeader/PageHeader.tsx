import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { Box } from 'atoms/Box';

type PageHeaderProps = {
  id: LocaleString;
};
export const PageHeader = ({ id }: PageHeaderProps) => {
  return (
    <Box height="5.6rem">
      <Grid
        bg="applegreen.500"
        height="5.6rem"
        alignItems="center"
        position="fixed"
        width={{ xs: '100vw', md: '71.8rem', xm: '89.8rem' }}
        top="5.4rem"
        zIndex={2}
      >
        <Text variant="title" color="offwhite.0" textAlign="center" fontWeight="500" id={id} />
      </Grid>
    </Box>
  );
};
