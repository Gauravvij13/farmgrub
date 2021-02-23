import React from 'react';

export interface MinusProps {
  props?: any;
  fill?: any;
}

export const Minus = ({ fill, props }: MinusProps) => (
  <svg x="0px" y="0px" viewBox="0 -192 469 469" xmlSpace="preserve" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
    />
  </svg>
);
