import React from 'react';
import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { MissionDescription } from 'pages/mission/atoms/MissionDescription';
import { Image } from 'atoms/Image';

type PreLaunchContentProps = {
  title: LocaleString;
  description: LocaleString;
  number: LocaleString | string;
  src?: string;
  borderBottom?: string;
};
export const PreLaunchContent = ({
  borderBottom,
  number,
  src,
  title,
  description,
}: PreLaunchContentProps) => {
  return (
    <Box
      borderBottom={borderBottom}
      borderColor={{ xs: 'dirtyblue.500', md: 'transparent' }}
      py={{ xs: '4rem', md: '1rem' }}
      px={{ xs: '4rem', md: '1rem' }}
      maxWidth="37.5rem"
      mx="auto"
    >
      <Flex
        border="2px solid"
        borderColor="white"
        borderRadius="2rem"
        height="2.5rem"
        width="2.5rem"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <Text variant="body" color="white">
          {number}
        </Text>
      </Flex>
      <Text
        variant="title"
        fontWeight="medium"
        lineHeight={1.4}
        textAlign="center"
        color="white"
        id={title}
        px={{ xs: '4rem', md: '7rem' }}
      />
      {src && (
        <Image src={src} alt="Mission everyon eats" height="13rem" objectfit="scale-down" my={10} />
      )}
      <MissionDescription description={description} />
    </Box>
  );
};
