import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function ExclamationCircleIcon({
  stroke = colors['red-500'],
  width = 32,
  height = 32,
  fill = colors['base-white'],
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={stroke}
      {...rest}
    >
      <path
        d="M16.5 10.667V16m0 5.333h.013M28.5 16c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12Z"
        stroke={stroke}
        fill={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ExclamationCircleIcon };
