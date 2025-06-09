import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SpacingWidth02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 18, width = 18, fill = colors['gray-500'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 15.75V2.25m-13.5 13.5V2.25M4.875 9h8.25m0 2.25v-4.5m-8.25 4.5v-4.5"
      />
    </svg>
  );
};
export default SpacingWidth02Icon;
