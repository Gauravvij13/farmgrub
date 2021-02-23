import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { FarmGrubLogo } from 'molecules/FarmGrubLogo';
import { FarmList } from 'pages/farms/molecules/FarmList';
import { PartnerHeading } from 'pages/farms/molecules/PartnerHeading';
import { Supplier } from 'generated/graphql-hooks';

type FarmViewProps = {
  data?: Array<Omit<Supplier, 'supportsLoyaltyCards'>> | null;
};

export const FarmView = ({ data }: FarmViewProps) => {
  const masterSupplier = data?.find(supplier => supplier?.masterSupplier === true);
  return (
    <Box minHeight="100vh">
      <Flex>
        <Image
          width={{ xs: '100%', md: '89.8rem' }}
          height="auto"
          src={Array.isArray(masterSupplier?.images) ? masterSupplier?.images[0]?.url : ''}
          alt={masterSupplier?.images?.[0]?.altText}
          title={masterSupplier?.images?.[0]?.title}
        />
        <Box
          bg="transparent"
          height="9rem"
          width="8.5rem"
          border="0.3rem solid"
          borderColor="offwhite.0"
          position="absolute"
          top={{ xs: '3rem', md: '30%' }}
          right="4rem"
        >
          <FarmGrubLogo />
        </Box>
      </Flex>
      <Grid bg="applegreen.500" height="5.6rem" maxHeight="5.6rem" alignItems="center">
        <Text
          variant="title"
          color="offwhite.0"
          textAlign="center"
          fontWeight="500"
          id="farms.heading"
        />
      </Grid>
      <Box bg="offwhite.500" py="2.4rem">
        <Text
          id="farms.description"
          color="mahogany.500"
          variant="body"
          px="1.6rem"
          lineHeight="1.7rem"
        />
        <Text
          id="farms.linkbelow"
          color="mahogany.500"
          variant="body"
          px="1.6rem"
          lineHeight="2.4rem"
        >
          {masterSupplier?.description}
        </Text>
      </Box>
      <PartnerHeading />
      {data &&
        data?.map(supplier => {
          if (!supplier?.masterSupplier) {
            return (
              <FarmList
                key={supplier.id!}
                farmId={supplier?.id}
                farmname={supplier?.name}
                city={supplier?.city}
                state={supplier?.state?.abbr}
                farmProducts={supplier?.categories}
              />
            );
          }
          return null;
        })}
    </Box>
  );
};
