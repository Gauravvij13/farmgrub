import React from 'react';

export interface LeftArrowProps {
  fill?: string;
}

export const LeftArrow = ({ fill, ...props }: LeftArrowProps) => (
  <svg x="0px" y="0px" viewBox="0 0 256 256" xmlSpace="preserve" {...props}>
    <polygon
      fill={fill}
      fillRule="evenodd"
      points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"
    />
  </svg>
);
