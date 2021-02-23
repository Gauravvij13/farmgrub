import React, { MouseEvent } from 'react';
import { Box } from 'atoms/Box';
import { Image } from 'atoms/Image';
import { MissionHeader } from 'pages/mission/molecules/MissionHeader';
import { LocaleString } from 'locales';
import { PostLaunchDetail } from '../../molecules/PostLaunchDetail';

type PostLaunchSliderProps = {
  bgTop?: string;
  bgBottom?: string;
  src: string;
  titleText?: LocaleString;
  heading?: LocaleString;
  description?: LocaleString;
  title: LocaleString;
  logoSrc?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};
export const PostLaunchSlider = ({
  bgTop,
  bgBottom,
  src,
  titleText,
  heading,
  description,
  title,
  logoSrc,
  onClick,
}: PostLaunchSliderProps) => {
  return (
    <Box bg={bgBottom} minHeight={{ md: '94vh' }}>
      <Box bg={bgTop} height="41rem" zIndex={1}>
        <Box maxWidth="37.5rem" mx="auto">
          <Image src={src} alt="Post Launch" maxWidth="37.5rem" height="46rem" mx="auto" />
          <MissionHeader title={titleText} heading={heading} />
        </Box>
      </Box>
      <Box bg={bgBottom} pt={{ xs: '4rem', md: '5rem' }}>
        <PostLaunchDetail
          description={description}
          title={title}
          logoSrc={logoSrc}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};
