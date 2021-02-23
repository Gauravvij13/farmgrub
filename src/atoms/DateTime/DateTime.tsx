import React, { useMemo } from 'react';
import { Text } from 'atoms/Text';
import { DateFormat } from 'utils/dateFormat';
import { format as dateFnsFormat } from 'date-fns';

type DateProps = {
  date: Date | number;
  format: DateFormat;
};

export const DateTime = ({ date, format }: DateProps) => {
  const formatedDate = useMemo(() => dateFnsFormat(new Date(date), format), [date, format]);
  return (
    <Text variant="body" color="mahogany.500" fontWeight="bold" my={0} textTransform="capitalize">
      {formatedDate}
    </Text>
  );
};

DateTime.defaultProps = {
  format: DateFormat.default,
};
