import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const SwitchHorizontal02FeatheredIcon = (props: IconPropsType) => {
  const {
    height = 32,
    width = 32,
    fill = colors['primary-600'],
    secondFill = colors['primary-100'],
    stroke = colors['primary-50'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      {...rest}
    >
      <rect x="2" y="2" width="32" height="32" rx="16" fill={secondFill} />
      <rect
        x="2"
        y="2"
        width="32"
        height="32"
        rx="16"
        stroke={stroke}
        stroke-width="4"
      />
      <path
        d="M12.6667 21.3333H23.3334M23.3334 21.3333L20.6667 18.6667M23.3334 21.3333L20.6667 24M23.3334 14.6667H12.6667M12.6667 14.6667L15.3334 12M12.6667 14.6667L15.3334 17.3333"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
