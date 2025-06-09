import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function OutlineDotsHorizontal(props: IconPropsType) {
  const { width = 12, height = 12, stroke = colors['blue-gray-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        d="M2.5 6h.005M6 6h.005M9.5 6h.005M3 6a.5.5 0 11-1 0 .5.5 0 011 0zm3.5 0a.5.5 0 11-1 0 .5.5 0 011 0zM10 6a.5.5 0 11-1 0 .5.5 0 011 0z"
      ></path>
    </svg>
  );
}

export { OutlineDotsHorizontal };
