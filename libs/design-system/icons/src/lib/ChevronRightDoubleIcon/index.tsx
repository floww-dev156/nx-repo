import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronRightDoubleIcon = (props: IconPropsType) => {
  const { height = 20, width = 20, fill = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20 "
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14.167 9.167 10 5 5.833m5.833 8.334L15 10l-4.167-4.167"
      />
    </svg>
  );
};

export { ChevronRightDoubleIcon };
