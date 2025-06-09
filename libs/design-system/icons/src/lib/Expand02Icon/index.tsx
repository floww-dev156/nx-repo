import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Expand02Icon = (props: IconPropsType): React.ReactElement => {
  const { width = 20, height = 20, fill = colors['gray-600'], ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.5 17.5L17.5 2.5M2.5 17.5H7.5M2.5 17.5L2.5 12.5M17.5 2.5H12.5M17.5 2.5V7.5"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { Expand02Icon };
