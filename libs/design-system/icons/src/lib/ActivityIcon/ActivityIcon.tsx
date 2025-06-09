import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ActivityIcon = (props: IconPropsType) => {
  const { fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...rest}
      viewBox="0 0 32 32"
    >
      <path
        d="M29.333 16H24l-4 12-8-24-4 12H2.667"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ActivityIcon };
