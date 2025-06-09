import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const DataFlow02Icon = (props: IconPropsType) => {
  const {
    fill = colors['blue-gray-500'],
    height = 18,
    width = 18,
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
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 3v8.4c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h.15m0 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM5.25 3h7.5m-7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.5 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM9 9h3.75m0 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
      ></path>
    </svg>
  );
};

export default DataFlow02Icon;
