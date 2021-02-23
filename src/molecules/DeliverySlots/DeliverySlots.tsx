import React, { useCallback } from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { DeliverHeading } from 'atoms/DeliverHeading';
import { Chip } from 'atoms/Chip';
import { DeliverySlot } from 'generated/graphql-hooks';

type DeliverySlots = {
  onSelect?(id: string): void;
  timeSlots?: DeliverySlot[];
  heading: string;
  selectedChipId: string;
  date: string;
  selectedDate: string;
};
export const DeliverySlots = ({
  onSelect,
  heading,
  timeSlots,
  selectedChipId,
  date,
  selectedDate,
}: DeliverySlots) => {
  const handleInternalonSelect = useCallback(
    (id: string) => () => {
      if (typeof onSelect === 'function') {
        onSelect(id);
      }
    },
    [onSelect],
  );
  return (
    <Box borderBottom="1px solid" borderColor="pale.500" py={10}>
      <DeliverHeading heading={heading} />
      <Grid
        gridTemplateColumns="repeat(auto-fit,minmax(100px,min-content))"
        justifyContent="start"
        gridGap="2rem"
      >
        {Array.isArray(timeSlots) &&
          timeSlots.map(({ displayTime, id }) => (
            <Chip
              key={id!}
              variant={selectedChipId === id && selectedDate === date ? 'selected' : 'primary'}
              text={displayTime!}
              onClick={handleInternalonSelect(id!)}
            />
          ))}
      </Grid>
    </Box>
  );
};
