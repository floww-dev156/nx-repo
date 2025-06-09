import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const XCircleIcon1 = (iconProps: IconPropsType) => {
  const {
    stroke = colors['gray-600'],
    width = 20,
    height = 20,
    ...props
  } = iconProps;

  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5970_126267)">
        <path
          d="M10.001 18.334a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667z"
          fill="#fff"
        />
        <path
          d="M12.501 7.5l-5 5m0-5l5 5m5.834-2.5a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
          stroke={stroke}
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5970_126267">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XCircleIcon1;
