import React from 'react';
import { Box } from 'atoms/Box';
import { Taxon } from 'generated/graphql-hooks';
import { FarmListItem } from '../FarmListItem';

type FarmListProps = {
  farmId?: string | null;
  farmname?: string | null;
  city?: string | null;
  state?: string | null;
  farmProducts?: Array<Taxon> | null;
};

export const FarmList = ({ farmname, city, state, farmProducts, farmId }: FarmListProps) => {
  return (
    <Box>
      <FarmListItem
        farmId={farmId}
        farmname={farmname}
        city={city}
        state={state}
        farmProducts={farmProducts}
      />
    </Box>
  );
};
