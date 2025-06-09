import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';
import { IconPropsType } from '../types';

function BoldTableIcon({
  fill = colors['blue-600'],
  width = 16,
  height = 16,
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="#1D4ED8"
        d="M14.667 5.167H6.5V1.3h4.293c2.427 0 3.874 1.447 3.874 3.867zM14.667 10.833c-.034 2.38-1.474 3.8-3.874 3.8H6.5v-3.8h8.167z"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.5 1.3v3.867H1.333C1.336 2.744 2.783 1.3 5.207 1.3H5.5zM1.333 6.167H5.5v3.666H1.333V6.167zm0 4.666c.03 2.383 1.472 3.8 3.874 3.8H5.5v-3.8H1.334z"
        clipRule="evenodd"
      ></path>
      <path fill={fill} d="M14.667 6.167H6.5v3.666h8.167V6.167z"></path>
    </svg>
  );
}

export { BoldTableIcon };
