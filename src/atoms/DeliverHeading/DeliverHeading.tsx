import React from 'react';
import { Text, TextProps } from 'atoms/Text';
import { Grid } from 'atoms/Grid';

interface DeliverHeadingProps extends TextProps {
  time?: string;
  heading: string;
  date?: string;
}
export const DeliverHeading = ({ heading, time, date, ...props }: DeliverHeadingProps) => {
  return (
    <Grid gridGap=".5rem" gridAutoFlow="column" justifyContent="start" pb={10} {...props}>
      <Text as="h3" variant="body" color="steelgrey.500" fontWeight="500">
        {heading}
      </Text>
      {time && (
        <Text as="h3" variant="body" color="steelgrey.500" fontWeight="500">
          {time}
        </Text>
      )}
      {date && (
        <Text as="h3" variant="body" color="steelgrey.500" fontWeight="500">
          ({date})
        </Text>
      )}
    </Grid>
  );
};

DeliverHeading.defaultProps = {
  fontWeight: 'bold',
};
