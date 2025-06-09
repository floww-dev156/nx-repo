import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowLeft1Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 24,
    width = 24,
    stroke = colors['gray-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M19 12H5m0 0 7 7m-7-7 7-7"
      />
    </svg>
  );
};

export default ArrowLeft1Icon;
