import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Ellipse75Icon = (props: IconPropsType): React.ReactElement => {
  const { width = 8, height = 8, stroke = colors['gray-400'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <circle cx={4} cy={4} r={3} stroke={stroke} strokeWidth={2} />
    </svg>
  );
};

export default Ellipse75Icon;
