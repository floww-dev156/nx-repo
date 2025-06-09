import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const FeaturedCheckCircleIcon = (
  props: IconPropsType
): React.ReactElement => {
  const {
    height = 48,
    width = 48,
    fill = colors['success-50'],
    stroke = colors['success-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <rect width={width} height={height} fill={fill} rx={24} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="m19.5 24 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
      />
    </svg>
  );
};
