import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const Copy06Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      {...rest}
    >
      <path
        d="M5.625 2.25H10.95C12.6302 2.25 13.4702 2.25 14.112 2.57698C14.6765 2.8646 15.1354 3.32354 15.423 3.88803C15.75 4.52976 15.75 5.36984 15.75 7.05V12.375M4.65 15.75H10.725C11.5651 15.75 11.9851 15.75 12.306 15.5865C12.5882 15.4427 12.8177 15.2132 12.9615 14.931C13.125 14.6101 13.125 14.1901 13.125 13.35V7.275C13.125 6.43492 13.125 6.01488 12.9615 5.69401C12.8177 5.41177 12.5882 5.1823 12.306 5.03849C11.9851 4.875 11.5651 4.875 10.725 4.875H4.65C3.80992 4.875 3.38988 4.875 3.06901 5.03849C2.78677 5.1823 2.5573 5.41177 2.41349 5.69401C2.25 6.01488 2.25 6.43492 2.25 7.275V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
