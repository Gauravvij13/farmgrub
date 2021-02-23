import React from 'react';

export interface RightArrowProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
}

export const RightArrow = ({ fill, ...props }: RightArrowProps) => (
  <svg x="0px" y="0px" viewBox="0 0 31 31" xmlSpace="preserve" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M24.813,15.366L10.185,29.997c-0.487,0.487-1.128,0.731-1.768,0.731c-0.641,0-1.279-0.244-1.769-0.731
      c-0.977-0.978-0.977-2.561,0-3.536l11.095-11.096L6.649,4.268c-0.976-0.977-0.976-2.56,0-3.536c0.977-0.977,2.56-0.976,3.536,0
      L24.813,15.366z"
    />
  </svg>
);
