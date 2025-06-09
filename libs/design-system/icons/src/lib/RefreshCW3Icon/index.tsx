import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const RefreshCw3Icon = (props: IconPropsType) => {
  const {
    height = 18,
    width = 18,
    stroke = colors['gray-500'],
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 16.5s.637-.091 3.273-2.727A6.75 6.75 0 0 0 10.5 2.418m0 14.082H15m-4.5 0V12m-3-10.5s-.637.091-3.273 2.727A6.75 6.75 0 0 0 7.5 15.582M7.5 1.5H3m4.5 0V6"
      />
    </svg>
  );
};

export default RefreshCw3Icon;
