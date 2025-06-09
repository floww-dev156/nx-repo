import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const SwitchHorizontal02Icon = (props: IconPropsType) => {
  const {
    height = 32,
    width = 32,
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...rest}
    >
      <path
        d="M5.3335 22.6667H26.6668M26.6668 22.6667L21.3335 17.3333M26.6668 22.6667L21.3335 28M26.6668 9.33333H5.3335M5.3335 9.33333L10.6668 4M5.3335 9.33333L10.6668 14.6667"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
