import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function OutlineDotsVertical(props: IconPropsType) {
  const { width = 20, height = 20, stroke = colors['gray-400'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M10 10.834a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10 5a.833.833 0 1 0 0-1.666A.833.833 0 0 0 10 5ZM10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667Z"
        stroke={stroke}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { OutlineDotsVertical };
