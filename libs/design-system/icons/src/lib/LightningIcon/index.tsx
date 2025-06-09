import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function LightningIcon({
  fill = colors['blue-600'],
  width = 18,
  height = 18,
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...rest}
    >
      <path fill="#fff" d="M0 0h18v18H0z" />
      <path
        d="M10.687 1.5H6.37c-.135 0-.202 0-.261.02a.375.375 0 0 0-.14.087c-.045.044-.075.104-.136.225l-3.15 6.3c-.143.287-.215.431-.198.548a.375.375 0 0 0 .156.252C2.738 9 2.899 9 3.22 9h4.654l-2.25 7.5 9.145-9.484c.309-.32.463-.48.472-.616a.375.375 0 0 0-.132-.311C15.004 6 14.78 6 14.337 6H9l1.688-4.5Z"
        fill="#2563EB"
      />
    </svg>
  );
}

export { LightningIcon };
