import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowNarrowRightIcon = (props: IconPropsType) => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-700'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M3.334 10h13.333m0 0-5-5m5 5-5 5"
      />
    </svg>
  );
};
export { ArrowNarrowRightIcon };
