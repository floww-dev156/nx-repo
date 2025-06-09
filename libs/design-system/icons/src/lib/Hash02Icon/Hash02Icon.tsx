import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Hash02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, width = 24, fill = colors['gray-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.5 3l-3 18m11-18l-3 18m6-13h-17m16 8h-17"
      ></path>
    </svg>
  );
};

export { Hash02Icon };
