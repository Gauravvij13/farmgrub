import React from 'react';

export interface SearchProps {
  props?: any;
  fill?: any;
}

export const Search = ({ fill, props }: SearchProps) => (
  <svg x="0px" y="0px" viewBox="0 0 26 26" xmlSpace="preserve" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M9.71 0C15.07 0 19.42 4.35 19.42 9.71C19.42 11.84 18.73 13.81 17.57 15.41C17.59 15.43 17.62 15.45 17.64 15.47L24.98 22.81C25.36 23.2 25.37 23.83 24.97 24.22L24.26 24.93C23.87 25.32 23.25 25.32 22.86 24.93L15.52 17.6L15.46 17.53C13.85 18.72 11.86 19.42 9.71 19.42C4.35 19.42 0 15.07 0 9.71C0 4.35 4.35 0 9.71 0ZM9.71 2.71C5.84 2.71 2.71 5.84 2.71 9.71C2.71 13.58 5.84 16.71 9.71 16.71C13.58 16.71 16.71 13.58 16.71 9.71C16.71 5.84 13.58 2.71 9.71 2.71Z"
    />
  </svg>
);
