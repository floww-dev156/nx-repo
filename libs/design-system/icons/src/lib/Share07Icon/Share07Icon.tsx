import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Share07Icon = (props: IconPropsType) => {
  const { stroke = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.442 10.133 5.123 2.985m-.008-8.236L6.442 7.869M15.75 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM6.75 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm9 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );
};

export { Share07Icon };
