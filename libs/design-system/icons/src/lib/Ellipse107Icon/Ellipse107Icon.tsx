import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const Ellipse107Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    fill = colors['primary-600'],
    ...rest
  } = props;

  const radius = typeof width === 'number' ? width / 2 : parseInt(width) / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <circle cx={radius} cy={radius} r={radius} fill={fill} />
    </svg>
  );
};
