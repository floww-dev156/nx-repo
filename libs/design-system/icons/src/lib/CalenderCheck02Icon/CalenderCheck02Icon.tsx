import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';
const CalenderCheck02Icon = (props: IconPropsType) => {
  const {
    width = 28,
    height = 28,
    stroke = colors['primary-600'],
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M24.5 11.667h-21m21 2.917v-4.317c0-1.96 0-2.94-.381-3.69a3.5 3.5 0 0 0-1.53-1.529c-.749-.381-1.729-.381-3.689-.381H9.1c-1.96 0-2.94 0-3.689.381a3.5 3.5 0 0 0-1.53 1.53C3.5 7.327 3.5 8.307 3.5 10.267v9.8c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53c.749.38 1.729.38 3.689.38H14m4.667-23.332V7M9.333 2.333V7m7.584 15.167L19.25 24.5l5.25-5.25"
      />
    </svg>
  );
};

export { CalenderCheck02Icon };
