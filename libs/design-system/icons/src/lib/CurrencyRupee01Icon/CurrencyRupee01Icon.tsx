import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const CurrencyRupee01Icon = (props: IconPropsType) => {
  const {
    height = 48,
    width = 48,
    stroke = colors['base-white'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...rest}
    >
      <rect width={48} height={48} x={4} y={4} fill="#D1E9FF" rx={24} />
      <rect
        width={48}
        height={48}
        x={4}
        y={4}
        stroke="#EFF8FF"
        strokeWidth={8}
        rx={24}
      />
      <path
        stroke="#1570EF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 19h12m-12 5h12m-3.5 13L22 29h3c6.667 0 6.667-10 0-10"
      />
    </svg>
  );
};
