import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronLeft1Icon = (props: IconPropsType) => {
  const { stroke = colors['blue-gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      {...rest}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.25 13.5 6.75 9l4.5-4.5"
      />
    </svg>
  );
};

export default ChevronLeft1Icon;
