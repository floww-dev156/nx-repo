import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlarmClockIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 16, width = 16, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      fill="none"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.334 2-2 2m13.333 0-2-2M4.001 12.667 2.667 14m9.334-1.333L13.334 14M8.001 6v2.667L9.334 10m-1.333 4A5.333 5.333 0 1 0 8 3.333 5.333 5.333 0 0 0 8 14Z"
      />
    </svg>
  );
};
export { AlarmClockIcon };
