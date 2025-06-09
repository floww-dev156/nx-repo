import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const EllipseIcon = (props: IconPropsType) => {
  const { fill = colors['gray-400'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={4}
      height={4}
      fill="none"
      {...rest}
      viewBox="0 0 4 4"
    >
      <circle cx={2} cy={2} r={2} fill={fill} />
    </svg>
  );
};

export { EllipseIcon };
