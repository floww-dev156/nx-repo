import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const FeaturedUpload04Icon = (
  props: IconPropsType
): React.ReactElement => {
  const {
    width = 40,
    height = 40,
    stroke = colors['primary-600'],
    fill = colors['primary-100'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      {...rest}
    >
      <rect width="40" height="40" fill={fill} rx="20"></rect>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M23.334 20L20 16.667m0 0L16.667 20M20 16.667v7.667c0 1.159 0 1.738.46 2.387.304.43 1.181.963 1.705 1.034.787.107 1.086-.05 1.684-.361a8.333 8.333 0 10-8.015-.175"
      ></path>
    </svg>
  );
};
