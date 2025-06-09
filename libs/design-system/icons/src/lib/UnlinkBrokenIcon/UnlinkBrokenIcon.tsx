import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  width?: number;
  height?: number;
  stroke?: string;
}

function UnlinkBrokenIcon({
  width = 20,
  height = 20,
  stroke = colors['error-700'],
  ...other
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...other}
    >
      <g clipPath="url(#a)">
        <path
          stroke="#B42318"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m7.083 12.917 5.834-5.834M7.5 3.333V1.667m5 15v1.666M3.333 7.5H1.667m15 5h1.666M4.095 4.095 2.917 2.917m12.988 12.988 1.178 1.178M10 14.714l-1.768 1.768a3.333 3.333 0 1 1-4.714-4.714L5.286 10m9.428 0 1.768-1.768a3.333 3.333 0 1 0-4.714-4.714L10 5.286"
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

export { UnlinkBrokenIcon };
