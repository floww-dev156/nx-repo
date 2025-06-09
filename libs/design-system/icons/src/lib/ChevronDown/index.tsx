import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronDown = (props: IconPropsType) => {
  const {
    stroke = colors['base-black'],
    width = 24,
    height = 24,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 9 6 6 6-6"
      />
    </svg>
  );
};

export default ChevronDown;
