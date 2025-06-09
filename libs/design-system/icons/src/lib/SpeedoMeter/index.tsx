import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SpeedoMeter = (props: IconPropsType) => {
  const { stroke = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#a)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 1.5v1.875M9 1.5A7.5 7.5 0 0 0 1.5 9M9 1.5A7.5 7.5 0 0 1 16.5 9M9 14.625V16.5m0 0A7.5 7.5 0 0 0 16.5 9M9 16.5A7.5 7.5 0 0 1 1.5 9m1.875 0H1.5m15 0h-1.875m-.316 5.309-1.33-1.33m-9.288 1.33 1.332-1.332M3.69 3.75l1.303 1.302m9.315-1.302-4.184 4.125M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { SpeedoMeter };
