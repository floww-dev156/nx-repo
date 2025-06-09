import React, { ReactElement } from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const OutlinePlusIcon = (props: IconPropsType): ReactElement => {
  const {
    width = 36,
    height = 36,
    fill = colors['base-white'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M18 7.5A1.5 1.5 0 0119.5 9v7.5H27a1.5 1.5 0 010 3h-7.5V27a1.5 1.5 0 01-3 0v-7.5H9a1.5 1.5 0 010-3h7.5V9A1.5 1.5 0 0118 7.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default OutlinePlusIcon;
