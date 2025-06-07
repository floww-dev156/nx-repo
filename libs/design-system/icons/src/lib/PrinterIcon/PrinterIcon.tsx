import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const PrinterIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    stroke = colors['gray-700'],
    strokeWidth = '1.667',
    width = 20,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_567_48681)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M15 5.833v-1.5c0-.933 0-1.4-.182-1.756a1.667 1.667 0 00-.728-.729c-.357-.181-.823-.181-1.757-.181H7.666c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729C5 2.933 5 3.4 5 4.333v1.5M5 15c-.775 0-1.163 0-1.48-.085a2.5 2.5 0 01-1.768-1.768c-.085-.318-.085-.705-.085-1.48V9.833c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.092c.534-.273 1.234-.273 2.635-.273h8.666c1.4 0 2.1 0 2.635.273a2.5 2.5 0 011.093 1.092c.272.535.272 1.235.272 2.635v1.834c0 .775 0 1.162-.085 1.48a2.5 2.5 0 01-1.768 1.768C16.162 15 15.775 15 15 15m-2.5-6.25H15m-7.333 9.583h4.666c.934 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-1.334c0-.933 0-1.4-.182-1.756a1.667 1.667 0 00-.728-.729c-.357-.181-.823-.181-1.757-.181H7.666c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729C5 12.933 5 13.4 5 14.333v1.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_567_48681">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PrinterIcon;
