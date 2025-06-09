import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const FeaturedCreditCard02Icon = (props: IconPropsType) => {
  const {
    height = 32,
    width = 32,
    fill = colors['primary-100'],
    secondFill = colors['primary-50'],
    stroke = colors['primary-600'],
    ...rest
  } = props;

  const radius = Number(width) / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
      {...rest}
    >
      <rect width={width} height={height} x={2} y={2} fill={fill} rx={radius} />
      <rect
        width={width}
        height={height}
        x={2}
        y={2}
        stroke={secondFill}
        strokeWidth={4}
        rx={radius}
      />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M24.665 16.667H11.332m6 2.666h-3.333m-2.667-3.866v5.066c0 .747 0 1.12.145 1.406.128.25.332.455.583.582.285.146.659.146 1.405.146h9.067c.747 0 1.12 0 1.405-.146.251-.127.455-.331.583-.582.145-.285.145-.659.145-1.405v-5.067c0-.747 0-1.12-.145-1.405a1.334 1.334 0 0 0-.583-.583c-.285-.145-.658-.145-1.405-.145h-9.067c-.746 0-1.12 0-1.405.145-.25.128-.455.332-.583.583-.145.285-.145.658-.145 1.405Z"
      />
    </svg>
  );
};
