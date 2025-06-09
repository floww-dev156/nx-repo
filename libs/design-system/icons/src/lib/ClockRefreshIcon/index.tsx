import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ClockRefreshIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.044 10.744a7.083 7.083 0 01-13.179 2.798l-.208-.361m-.702-3.925a7.083 7.083 0 0113.179-2.798l.208.361M2.911 15.055l.61-2.277 2.277.61m8.404-6.776l2.277.61.61-2.277M9.998 6.25V10l2.084 1.25"
      ></path>
    </svg>
  );
};

export { ClockRefreshIcon };
