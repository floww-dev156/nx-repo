import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedUsersRightIcon = (props: IconPropsType) => {
  const {
    fill = colors['primary-100'],
    stroke = colors['primary-600'],
    secondFill = colors['primary-50'],
    height = 46,
    width = 46,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 46"
      {...rest}
    >
      <rect width={40} height={40} x={3} y={3} fill={fill} rx={20} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m28.833 30.5 2.5-2.5m0 0-2.5-2.5m2.5 2.5h-5m-.417-12.258a3.334 3.334 0 0 1 0 6.182M22.999 25.5h-3.333c-1.553 0-2.33 0-2.942.254a3.334 3.334 0 0 0-1.804 1.804c-.254.612-.254 1.389-.254 2.942m9.583-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
      />
      <rect
        width={40}
        height={40}
        x={3}
        y={3}
        stroke={secondFill}
        strokeWidth={6}
        rx={20}
      />
    </svg>
  );
};

export default FeaturedUsersRightIcon;
