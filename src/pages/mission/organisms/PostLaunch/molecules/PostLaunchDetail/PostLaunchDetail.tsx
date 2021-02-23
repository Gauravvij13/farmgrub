import React, { MouseEvent } from 'react';
import { Box } from 'atoms/Box';
import { MissionDescription } from 'pages/mission/atoms/MissionDescription';
import { Button } from 'molecules/Button';
import { LocaleString } from 'locales';
import { Image } from 'atoms/Image';

type PostLaunchDetailProps = {
  description?: LocaleString;
  title: LocaleString;
  logoSrc?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};
export const PostLaunchDetail = ({
  description,
  title,
  logoSrc,
  onClick,
}: PostLaunchDetailProps) => {
  return (
    <Box
      py={{ xs: '5rem', md: '1rem' }}
      px={{ xs: '4rem', md: '1rem' }}
      maxWidth="37.5rem"
      mx="auto"
    >
      {logoSrc && (
        <Image
          src={logoSrc}
          alt="Mission everyon eats"
          height="13rem"
          objectfit="scale-down"
          my={10}
        />
      )}
      <MissionDescription description={description} />
      {onClick && (
        <Button
          title={title}
          color="white"
          variant="default"
          maxHeight="4rem"
          maxWidth="15rem"
          px="4rem"
          m="auto"
          my="4rem"
          onClick={onClick}
        />
      )}
    </Box>
  );
};
