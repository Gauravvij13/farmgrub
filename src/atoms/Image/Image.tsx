import React, { useState, FC, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';
import ContentLoader from 'react-content-loader';

import { Flex } from 'atoms/Flex';

import { BaseWrapperProps, ImageWrapper } from './Image.styles';

interface BaseImageWrapperProps extends BaseWrapperProps {
  src?: any;
  alt?: string | null;
  title?: string | null;
  /**
   * If true, will enable lazy loading of the image,(will load image when scrolled over)
   */
  lazy?: boolean;
}

type LazyImageProps = {} & Omit<BaseImageWrapperProps, 'lazy'>;

const LazyImage: FC<LazyImageProps> = ({ src, alt, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [fetched, setFetched] = useState(false);

  const contentLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  const contentFetched = useCallback(() => {
    setFetched(true);
  }, []);

  return (
    <>
      <LazyLoad debounce={false} offset={500} height="100%" onContentVisible={contentLoaded}>
        <Flex opacity={Number(fetched)} height="100%">
          <img
            src={src}
            alt={alt as string | undefined}
            title={title as string | undefined}
            width="100%"
            height="100%"
            onLoad={contentFetched}
          />
        </Flex>
      </LazyLoad>
      {(!loaded || !fetched) && (
        <Flex
          height="100%"
          opacity={Number(!loaded || !fetched)}
          position="absolute"
          top={0}
          left={0}
          right={0}
          maxWidth={{ xs: '20rem', md: '35rem' }}
          margin="auto"
        >
          <ContentLoader
            viewBox="5 5 100 100"
            speed={1}
            height="10rem"
            width="10rem"
            backgroundColor="#f5f6f7"
            foregroundColor="#eee"
          >
            <rect x="10" y="10" width="100" height="100" />
          </ContentLoader>
        </Flex>
      )}
    </>
  );
};

export const Image: FC<BaseImageWrapperProps> = React.memo(({ lazy, src, alt, title, ...rest }) => {
  return (
    <ImageWrapper {...rest}>
      {lazy ? (
        <LazyImage src={src} alt={alt} title={title} />
      ) : (
        <img
          src={src}
          alt={alt as string | undefined}
          width="100%"
          height="100%"
          title={title as string | undefined}
        />
      )}
    </ImageWrapper>
  );
});
