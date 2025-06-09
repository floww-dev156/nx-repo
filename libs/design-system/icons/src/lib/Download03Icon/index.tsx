import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Download03IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}
const Download03Icon = (props: Download03IconProps) => {
  const { fill = colors['gray-500'], width = 32, height = 32, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.666 16.001 16 21.335m0 0L21.333 16M16 21.335V10.668m13.333 5.333c0 7.364-5.97 13.334-13.333 13.334-7.364 0-13.334-5.97-13.334-13.334C2.666 8.638 8.636 2.668 16 2.668s13.333 5.97 13.333 13.333Z"
      />
    </svg>
  );
};
export { Download03Icon };
