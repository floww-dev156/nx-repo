import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MaximizeIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-600'],
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
        strokeWidth="1.5"
        d="M11.667 8.333L17.5 2.5m0 0h-5m5 0v5m-9.167 4.167L2.5 17.5m0 0h5m-5 0v-5"
      ></path>
    </svg>
  );
};

export { MaximizeIcon };
