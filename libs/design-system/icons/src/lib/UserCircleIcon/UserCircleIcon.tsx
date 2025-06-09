import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  fill?: string;
}

function UserCircleIcon({
  width = 20,
  height = 20,
  fill = colors['primary-600'],
  ...other
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...other}
    >
      <g clipPath="url(#a)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.432 16.199a3.334 3.334 0 0 1 3.07-2.032h5c1.378 0 2.562.837 3.07 2.032m-2.237-8.282a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Zm5 2.083a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { UserCircleIcon };
