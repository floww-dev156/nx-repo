import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MapPin02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 24,
    stroke = colors['gray-500'],
    width = 24,
    fill = colors['gray-600'],
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        d="M9 9.375a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
        opacity={0.12}
      />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9.375a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 16.5c1.5-3 6-4.936 6-9a6 6 0 0 0-12 0c0 4.064 4.5 6 6 9Z"
      />
    </svg>
  );
};
export default MapPin02Icon;
