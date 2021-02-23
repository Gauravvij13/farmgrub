import React from 'react';
import { LocaleString } from 'locales';
import { Text } from 'atoms/Text';

type MissionDescriptionProps = {
  description?: LocaleString;
};
export const MissionDescription = ({ description }: MissionDescriptionProps) => {
  return (
    <Text
      variant="body"
      fontWeight="300"
      letterSpacing="0.6px"
      lineHeight={1.4}
      textAlign="center"
      color="white"
      id={description}
    />
  );
};
