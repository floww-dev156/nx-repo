import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';

import { IconPropsType } from '../types';

export const Download02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    width = 20,
    height = 20,
    stroke = colors['base-white'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...rest}
    >
      <path
        d="M17.5 17.5H2.5M15 9.16667L10 14.1667M10 14.1667L5 9.16667M10 14.1667V2.5"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
