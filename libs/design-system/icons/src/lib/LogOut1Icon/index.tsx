import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

import { IconPropsType } from '../types';

const LogOut1Icon = (props: IconPropsType) => {
  const { fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        d="M13.333 14.167 17.5 10m0 0-4.167-4.167M17.5 10h-10m0-7.5h-1c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5h1"
        stroke={fill}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { LogOut1Icon };
