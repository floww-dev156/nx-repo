import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const BarLineChartIcon = (props: IconPropsType) => {
  const {
    fill = colors['gray-500'],
    stroke = colors['gray-500'],
    width = 18,
    height = 18,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <g opacity={0.12}>
        <path
          fill="#98A2B3"
          d="M15.796 4.83a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59ZM3.796 7.08a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59ZM9.796 2.58a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59Z"
        />
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.796 4.83a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59ZM3.796 7.08a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59ZM9.796 2.58a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59Z"
        />
      </g>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 15V9.75M9 15V7.5M3 15v-3m7.055-8.23 3.876 1.454M8.1 4.051 3.9 7.2m11.896-2.37a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59Zm-12 2.25a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59Zm6-4.5a1.125 1.125 0 1 1-1.592 1.59 1.125 1.125 0 0 1 1.591-1.59Z"
      />
    </svg>
  );
};
export default BarLineChartIcon;
