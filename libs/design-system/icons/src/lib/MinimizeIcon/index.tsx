import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const MinimizeIcon = (props: IconPropsType): React.ReactElement => {
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
        d="M3.333 11.667h5m0 0v5m0-5L2.5 17.5m14.167-9.167h-5m0 0v-5m0 5L17.5 2.5"
      ></path>
    </svg>
  );
};

export { MinimizeIcon };
