import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronRightIcon = (props: IconPropsType) => {
  const { width = 24, height = 24, fill = colors['gray-500'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...rest}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 18l6-6-6-6"
      ></path>
    </svg>
  );
};

export { ChevronRightIcon };
