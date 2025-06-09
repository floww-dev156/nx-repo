import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ClockStopWatchIcon = (props: IconPropsType) => {
  const {
    fill = colors['primary-100'],
    stroke = colors['primary-600'],
    secondFill = colors['blue-50'],
    width = 46,
    height = 46,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 46"
      {...rest}
    >
      <rect width={40} height={40} x={3} y={3} fill={fill} rx={20} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M23 20.917v3.333l2.083 1.25m-2.084-8.333a7.083 7.083 0 1 0 0 14.167 7.083 7.083 0 0 0 0-14.167Zm0 0v-2.5m-1.666 0h3.333m5.274 2.993-1.25-1.25.625.625m-13.257.625 1.25-1.25-.625.625"
      />
      <rect
        width={40}
        height={40}
        x={3}
        y={3}
        stroke={secondFill}
        strokeWidth={6}
        rx={20}
      />
    </svg>
  );
};
export { ClockStopWatchIcon };
