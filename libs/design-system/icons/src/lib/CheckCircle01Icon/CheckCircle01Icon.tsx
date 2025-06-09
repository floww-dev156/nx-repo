import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CheckCircle01Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, stroke = colors['success-500'], width = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_6710_312099)">
        <path
          fill={stroke}
          d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334"
          opacity="0.12"
        ></path>
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="m5 8 2 2 4-4m3.667 2A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_6710_312099">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckCircle01Icon;
