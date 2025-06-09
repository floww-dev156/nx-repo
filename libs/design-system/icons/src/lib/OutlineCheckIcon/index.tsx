import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function OutlineCheckIcon({
  fill = colors['blue-600'],
  ...rest
}: IconPropsType) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="m3.334 8.667 2.667 2.666 6.666-6.666"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { OutlineCheckIcon };
