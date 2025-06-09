import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowNarrowUpRightIcon = (props: IconPropsType) => {
  const {
    stroke = colors['primary-600'],
    width = 20,
    height = 20,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 15 15 5m0 0H8.333M15 5v6.667"
      />
    </svg>
  );
};

export { ArrowNarrowUpRightIcon };
