import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';
const Ellipse34Icon = (props: IconPropsType) => {
  const { fill = colors['green-light-400'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...rest}
    >
      <circle cx={6} cy={6} r={6} fill={fill} />
    </svg>
  );
};
export { Ellipse34Icon };
