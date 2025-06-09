import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Expand01Icon = (props: IconPropsType) => {
  const { fill = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.667 8.333 17.5 2.5m0 0h-5m5 0v5m-9.167 4.167L2.5 17.5m0 0h5m-5 0v-5"
      />
    </svg>
  );
};

export { Expand01Icon };
