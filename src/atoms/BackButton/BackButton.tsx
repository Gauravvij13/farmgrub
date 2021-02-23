import React from 'react';
import { Scale } from 'atoms/Scale';
import { useHistory } from 'react-router-dom';
import { Grid } from 'atoms/Grid';
import { BoxProps } from 'atoms/Box';
import { BackImage } from './atoms/BackImage/BackImage';

interface BackButtonProps {
  left?: BoxProps['left'];
  top?: BoxProps['top'];
  onClick?: () => void;
}
export const BackButton = ({ left, top, onClick }: BackButtonProps) => {
  const history = useHistory();
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else {
      history.push('/orders');
    }
  };
  return (
    <Scale
      position="sticky"
      left={left}
      top={top}
      zIndex={2}
      onClick={handleClick}
      cursor="pointer"
      width="50px"
      height="0rem"
      pl="1rem"
    >
      <Grid
        justifyContent="center"
        alignItems="center"
        borderRadius={20}
        width={30}
        height={30}
        bg="white"
      >
        <BackImage />
      </Grid>
    </Scale>
  );
};

BackButton.defaultProps = {
  left: '1.5rem',
  top: '1.5rem',
};
