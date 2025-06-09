import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const User03Icon = (props: IconPropsType) => {
  const { stroke = colors['primary-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...rest}
      viewBox="0 0 12 12"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.5 10C2.668 8.761 4.254 8 6 8s3.332.761 4.5 2M8.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );
};

export { User03Icon };
