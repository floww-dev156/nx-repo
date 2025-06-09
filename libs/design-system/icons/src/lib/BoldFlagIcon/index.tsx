import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function BoldFlagIcon({
  fill = colors['blue-gray-500'],
  width = 12,
  height = 12,
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 12"
      {...rest}
    >
      <path
        fill={fill}
        d="M9.01 6.165l-.61-.61a.695.695 0 01-.235-.515.825.825 0 01.245-.615l.6-.6c.52-.52.715-1.02.55-1.415-.16-.39-.655-.605-1.385-.605H2.95v-.43A.378.378 0 002.575 1a.378.378 0 00-.375.375v9.25c0 .205.17.375.375.375s.375-.17.375-.375v-2.44h5.225c.72 0 1.205-.22 1.37-.615.165-.395-.025-.89-.535-1.405z"
      ></path>
    </svg>
  );
}

export { BoldFlagIcon };
