import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FlipBackwardIcon = (props: IconPropsType) => {
  const { fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <g>
        <path
          d="M2.5 7.5h11.25a3.75 3.75 0 110 7.5H10M2.5 7.5l3.333-3.333M2.5 7.5l3.333 3.333"
          stroke={fill}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export { FlipBackwardIcon };
