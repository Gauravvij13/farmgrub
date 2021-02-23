import React, { useState, useCallback, useMemo } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';

import { Image } from 'atoms/Image';
import { Box, BoxProps } from 'atoms/Box';
import useVisibleState from 'hooks/useVisibleState';
import { Asset as ProductImageType } from 'generated/graphql-hooks';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import { Text } from 'atoms/Text';

const BoxStyle = styled(Box)<BoxProps>`
  .slick-slider {
    max-width: 20vw;
    margin: auto;
    div {
      div {
        outline: none;
      }
    }
    .slick-dots {
      bottom: -20px;
      li {
        width: 5px;
      }
    }
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.xm}) {
    .slick-slider {
      max-width: 32vw;
    }
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    .slick-slider {
      max-width: 88vw;
    }
  }
  @media only screen and (min-width: 3000px) {
    .slick-slider {
      max-width: 10vw;
    }
  }
`;

type ProductSliderProps = {
  images: ProductImageType[];
  productName?: string | null;
};
const settings = {
  infinite: true,
  autoplay: false,
  dots: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const ProductSlider = ({ images, productName }: ProductSliderProps) => {
  const [index, setIndex] = useState(0);
  const { visible, show, hide } = useVisibleState();

  const lightBoxImages = useMemo(() => images?.map(({ url }) => url || '') || [], [images]);

  const onImageClick = useCallback(
    (imageIndex: number) => () => {
      setIndex(imageIndex);
      show();
    },
    [show],
  );

  const imageTitle = useMemo(
    () => (
      <Text variant="body" as="span" top={1}>
        {productName}
      </Text>
    ),
    [productName],
  );

  return (
    <BoxStyle px="2rem" pb={{ xs: '2rem', md: '0rem' }} height={{ xs: '28rem', md: '32rem' }}>
      <Slider {...settings}>
        {images.map((list: ProductImageType, i: number) => {
          return (
            <Image
              src={list.url}
              alt={list.altText}
              title={list.title}
              key={list.id!}
              objectfit="scale-down"
              height={{ xs: '28rem', md: '32rem' }}
              onClick={onImageClick(i)}
            />
          );
        })}
      </Slider>
      {visible && (
        <Lightbox
          imageTitle={imageTitle}
          mainSrc={lightBoxImages[index]}
          prevSrc={
            lightBoxImages.length > 1
              ? lightBoxImages[(index + lightBoxImages.length - 1) % lightBoxImages.length]
              : undefined
          }
          nextSrc={
            lightBoxImages.length > 1
              ? lightBoxImages[(index + 1) % lightBoxImages.length]
              : undefined
          }
          onMovePrevRequest={() =>
            setIndex(prev => (prev + lightBoxImages.length - 1) % lightBoxImages.length)
          }
          onMoveNextRequest={() => setIndex(prev => (prev + 1) % lightBoxImages.length)}
          onCloseRequest={hide}
        />
      )}
    </BoxStyle>
  );
};
