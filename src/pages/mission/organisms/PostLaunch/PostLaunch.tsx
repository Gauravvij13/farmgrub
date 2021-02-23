import React, { useRef } from 'react';
import { Box, BoxProps } from 'atoms/Box';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideOne } from './organisms/SlideOne';
import { SlideTwo } from './organisms/SlideTwo';
import { SlideThree } from './organisms/SlideThree';

const BoxStyle = styled(Box)<BoxProps>`
  .slick-slider {
    max-width: 100%;
    margin: auto;
    div {
      div {
        outline: none;
      }
    }
    .slick-arrow {
      display: none !important;
    }
    .slick-dot-color {
      color: red;
    }
    .slick-dots {
      top: 45rem;
      bottom: unset;
      margin-left: -0.5rem;
      li {
        width: 10px;
        height: 10px;
        button {
          &:before {
            font-size: 1rem;
          }
        }
      }
    }
    .slick-dots li button:before {
      opacity: 1;
      color: white;
    }
    .slick-dots li.slick-active button:before {
      opacity: 0.5;
      color: #000000 !important;
    }
  }
`;

const settings = {
  infinite: true,
  autoplay: false,
  dots: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  width: '100%',
  adaptiveHeight: true,
};

export const PostLaunch = () => {
  const sliderRef = useRef<Slider>(null);
  const handleClick = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <BoxStyle>
      <Slider {...settings} ref={sliderRef}>
        <SlideOne onClick={handleClick} />
        <SlideTwo onClick={handleClick} />
        <SlideThree onClick={handleClick} />
      </Slider>
    </BoxStyle>
  );
};
