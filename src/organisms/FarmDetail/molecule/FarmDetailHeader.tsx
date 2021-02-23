/* eslint-disable global-require */
import React from 'react';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { Supplier } from 'generated/graphql-hooks';

type FarmDetailHeaderProps = {
  supplier: Partial<Supplier>;
};

export const FarmDetailHeader = ({ supplier }: FarmDetailHeaderProps) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Text color="mahogany.500" variant="heading" my="0rem">
          {supplier?.name}
        </Text>
      </Flex>
      <Grid gridTemplateColumns="1fr" mx="-2rem" my="1.5rem">
        <Image
          src={Array.isArray(supplier?.images) ? supplier?.images[0]?.url : ''}
          alt={supplier?.images?.[0]?.altText}
          title={supplier?.images?.[0]?.title}
          width="auto"
          objectfit="contain"
          height="auto"
        />
      </Grid>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Image
          src={supplier?.logo?.url}
          alt={supplier?.logo?.altText}
          title={supplier?.logo?.title}
          maxWidth="25rem"
        />

        <Text color="secondary.500" variant="small" mt={0} fontWeight="bold">
          <Box as={'a' as any} color="secondary.500" href={supplier?.websiteUrl} target="_blank">
            {`${supplier?.websiteName} `}
          </Box>
          | {supplier?.city} {supplier?.state?.abbr}
        </Text>
      </Flex>
    </>
  );
};
