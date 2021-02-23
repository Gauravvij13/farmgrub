import React from 'react';

export interface PlusProps {
  props?: any;
  fill?: any;
}

export const Plus = ({ fill, props }: PlusProps) => (
  <svg x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M455.4,205.4H303.6c-4.9,0-8.9-4-8.9-8.9V44.6C294.6,20,274.7,0,250,0s-44.6,20-44.6,44.6v151.8c0,4.9-4,8.9-8.9,8.9H44.6
      C20,205.4,0,225.3,0,250s20,44.6,44.6,44.6h151.8c4.9,0,8.9,4,8.9,8.9v151.8c0,24.7,20,44.6,44.6,44.6s44.6-20,44.6-44.6V303.6
      c0-4.9,4-8.9,8.9-8.9h151.8c24.7,0,44.6-20,44.6-44.6S480,205.4,455.4,205.4z"
    />
  </svg>
);
