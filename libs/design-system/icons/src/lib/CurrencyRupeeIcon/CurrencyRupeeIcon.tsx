import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const CurrencyRupeeIcon = (props: IconPropsType) => {
  const {
    height = 16,
    width = 16,
    stroke = colors['base-white'],
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2H12M4 5.33333H12M9.66667 14L4 8.66667H6C10.4447 8.66667 10.4447 2 6 2"
        stroke={stroke}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
