import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function SolidDotsHorizontal({
  fill = colors['blue-gray-400'],
  width = 20,
  height = 20,
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#94A3B8"
      />
    </svg>
  );
}

export { SolidDotsHorizontal };
