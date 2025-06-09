import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Loading02Icon = (props: IconPropsType): React.ReactElement => {
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
        d="M12 2v4m0 12v4M6 12H2m20 0h-4m1.078 7.078L16.25 16.25M19.078 5L16.25 7.828M4.922 19.078L7.75 16.25M4.922 5L7.75 7.828"
      ></path>
    </svg>
  );
};

export { Loading02Icon };
