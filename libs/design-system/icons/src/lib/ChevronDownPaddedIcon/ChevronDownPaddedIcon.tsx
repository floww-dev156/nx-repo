import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronDownPaddedIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 24,
    width = 24,
    fill = colors['gray-500'],
    strokeWidth = 1.5,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M6 9l6 6 6-6"
      ></path>
    </svg>
  );
};

export { ChevronDownPaddedIcon };
