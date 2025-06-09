import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ClockOutlineIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 12,
    width = 12,
    fill = colors['error-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 12"
      {...rest}
    >
      <g clipPath="url(#clip0_3940_3406)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M6 3v3l2 1m3-1A5 5 0 111 6a5 5 0 0110 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3940_3406">
          <path fill="#fff" d="M0 0H12V12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { ClockOutlineIcon };
