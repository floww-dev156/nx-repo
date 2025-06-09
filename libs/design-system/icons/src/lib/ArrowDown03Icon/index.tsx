import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowDown03Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 32, width = 10, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 32"
      fill="none"
      {...rest}
    >
      <path
        d="M5 32L9.04145 25L0.958549 25L5 32ZM4.3 3.0598e-08L4.3 25.7L5.7 25.7L5.7 -3.0598e-08L4.3 3.0598e-08Z"
        fill={fill}
      />
    </svg>
  );
};

export { ArrowDown03Icon };
