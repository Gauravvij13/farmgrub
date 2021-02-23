import React from 'react';

export interface HamburgerMenuProps {
  props?: any;
  fill?: any;
}

export const HamburgerMenu = ({ fill, ...props }: HamburgerMenuProps) => (
  <svg x="0px" y="0px" viewBox="0 0 24 16" xmlSpace="preserve" {...props}>
    <g
      id="consumer-views"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <g
        id="quick-deliveries"
        transform="translate(-17.000000, -35.000000)"
        stroke={fill || '#7ED321'}
        strokeWidth="3"
      >
        <g id="Group-4" transform="translate(19.000000, 36.000000)">
          <line x1="0" y1="0.683333333" x2="20.5" y2="0.683333333" id="Line-2" />
          <line x1="0" y1="6.83333333" x2="20.5" y2="6.83333333" id="Line-2-Copy" />
          <line x1="0" y1="12.9833333" x2="20.5" y2="12.9833333" id="Line-2-Copy-2" />
        </g>
      </g>
    </g>
  </svg>
);
