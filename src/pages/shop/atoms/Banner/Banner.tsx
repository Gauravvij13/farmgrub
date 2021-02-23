import React, { useCallback, useRef, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import ContentLoader from 'react-content-loader';

import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import styled from 'styled-components';
import { LocaleString } from 'locales';
import { Box, BoxProps } from 'atoms/Box';
import { ArrowButton } from 'atoms/ArrowButton';
import { AdUnit } from 'generated/graphql-hooks';
import { useMediaQuery } from 'hooks/useMediaQuery';

const defaultBanner = require('assets/images/banner/banner.png');
const defaultBannerMobile = require('assets/images/banner/banner-mobile.png');

const BoxStyle = styled(Box)<BoxProps>`
  & > div::-webkit-scrollbar {
    display: none;
  }
`;

type BannerProps = {
  id: LocaleString;
  promotions?: AdUnit[];
  description?: string | null;
  loading?: boolean;
};

// const settings = {
//   infinite: false,
//   autoplay: false,
//   autoplaySpeed: 1500,
//   slidesToScroll: 1,
//   nextArrow: <RightArrow />,
//   prevArrow: <LeftArrow />,
//   variableWidth: true,
// };

export const Banner = ({ id, promotions, description, loading }: BannerProps) => {
  const scrollRef = useRef<any>();

  const bannerItemsLength = useMemo(() => (promotions?.length || 1) - 1, [promotions]);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  /**
   * 290 px width slide 1 ad banner at a time.
   */
  const handleLeftScroll = useCallback(() => {
    setScrollPosition(prev => prev - 290 - bannerItemsLength);
  }, [bannerItemsLength]);

  const handleRightScroll = useCallback(() => {
    setScrollPosition(prev => prev + 290 + bannerItemsLength);
  }, [bannerItemsLength]);

  const shouldShowRightArrow = useMemo(() => {
    if (scrollRef?.current) {
      /**
       * only show when position of view is less than scrollable width and content displayed on screen.
       */
      return scrollPosition < scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    }
    return true;
  }, [scrollPosition]);

  const debouncedInput = useMemo(() => debounce(setScrollPosition, 500), []);

  useEffect(() => {
    return debouncedInput.cancel();
  }, [debouncedInput]);

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => debouncedInput(e.currentTarget.scrollLeft),
    [debouncedInput],
  );

  const isDesktop = useMediaQuery('(min-width: 64rem)');

  if (loading) {
    return (
      <Box p={5} height="290px">
        <ContentLoader width="100%" height="100%" backgroundColor="#ebebeb" foregroundColor="#eee">
          <rect x="2" y="2" r="1" width="100%" height="100%" />
        </ContentLoader>
      </Box>
    );
  }

  if (Array.isArray(promotions) && promotions.length >= 3) {
    return (
      <BoxStyle maxWidth={{ xs: '100vw', md: 718, xm: 898 }} overflowX="hidden" bg="white">
        {(!isDesktop || promotions.length > 3) && (
          <Box
            position="absolute"
            width="100%"
            display={{ xs: 'none', md: 'flex' }}
            className="arrow-opacity"
          >
            {scrollPosition > 0 && (
              <ArrowButton
                left="2rem"
                top="12.5rem"
                onClick={handleLeftScroll}
                name="leftArrow"
                height="3rem"
                width="3rem"
              />
            )}
            {shouldShowRightArrow && (
              <ArrowButton
                right="1.6rem"
                top="12.5rem"
                onClick={handleRightScroll}
                name="rightArrow"
                height="3rem"
                width="3rem"
              />
            )}
          </Box>
        )}
        <Grid
          gridAutoFlow="column"
          overflowX="auto"
          gridGap={3}
          mx={3}
          pt={3}
          justifyContent="space-between"
          ref={scrollRef}
          style={{ scrollBehavior: 'smooth' }}
          onScroll={onScroll}
          overflowY="hidden"
        >
          {promotions.map(promotion => (
            <a
              key={promotion.id!}
              href={promotion.targetUrl || undefined}
              target={promotion.newWindow ? '_blank' : undefined}
            >
              <Image
                src={promotion.image.custom}
                alt={promotion.image.altText}
                title={promotion.image.title}
                height="29rem"
                width="29rem"
              />
            </a>
          ))}
        </Grid>
        {description && (
          <Text
            as="div"
            variant="body"
            color="mahogany.500"
            px={{ xs: '2rem', md: '7rem' }}
            textAlign="center"
            lineHeight="22px"
            py={5}
            my={5}
          >
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: `${description}` }}
            />
          </Text>
        )}
      </BoxStyle>
    );
  }
  return (
    <Box>
      <Image src={defaultBanner} alt="banner" display={{ xs: 'none', md: 'block' }} />
      <Image src={defaultBannerMobile} alt="banner" display={{ xs: 'block', md: 'none' }} />
      <Grid
        position="absolute"
        top={{ xs: '1rem', md: '3rem' }}
        left={{ xs: '0', md: '10rem' }}
        right={{ xs: '0', md: 'unset' }}
        maxWidth="30rem"
        m={{ xs: 'auto', md: 'unset' }}
      >
        <Text
          variant="field"
          color="darklavender.500"
          id={id}
          textAlign={{ xs: 'center', md: 'unset' }}
          display={{ xs: 'none', md: 'block' }}
        />
        <Text
          variant="body"
          color="darklavender.500"
          id={id}
          lineHeight="1.9rem"
          px="2rem"
          textAlign={{ xs: 'center', md: 'unset' }}
          display={{ xs: 'block', md: 'none' }}
        />
      </Grid>
    </Box>
  );
};
