import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const User3Icon = (props: IconPropsType) => {
  const { stroke = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 15c1.752-1.858 4.13-3 6.75-3s4.998 1.142 6.75 3m-3.375-9.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z"
      />
    </svg>
  );
};

export { User3Icon };
