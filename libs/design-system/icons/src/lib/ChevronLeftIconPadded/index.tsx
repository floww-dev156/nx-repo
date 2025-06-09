import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function ChevronLeftIconPadded(props: IconPropsType) {
  const {
    height,
    width,
    fill = colors['primary-600'],
    className,
    ...rest
  } = props;
  return (
    <svg
      width={height || 16}
      height={width || 16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 12 6 8l4-4"
        stroke={fill}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ChevronLeftIconPadded };
