import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ClockRewindIcon = (props: IconPropsType): React.ReactElement => {
  const { fill = colors['gray-500'], width = 20, height = 20, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.917 11.25 17.25 9.583l-1.667 1.667M17.5 10a7.5 7.5 0 1 1-1.038-3.81M10 5.834V10l2.5 1.667"
      />
    </svg>
  );
};
export { ClockRewindIcon };
