import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SolidCheckBoxCheckedIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 16,
    width = 16,
    fill = colors['gray-600'],
    stroke = colors['base-white'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <rect width={16} height={16} fill={fill} rx={4} />
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="m12 5-5.5 5.5L4 8"
      />
    </svg>
  );
};

export { SolidCheckBoxCheckedIcon };
