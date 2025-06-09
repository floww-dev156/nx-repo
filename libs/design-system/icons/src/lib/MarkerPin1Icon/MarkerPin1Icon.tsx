import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const MarkerPin1Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, fill = colors['gray-500'], width = 20, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M2.25 7.5a6.75 6.75 0 0 1 13.5 0c0 1.895-.86 3.555-2.03 5.075-.979 1.27-2.231 2.512-3.482 3.752l-.708.703a.75.75 0 0 1-1.06 0l-.708-.703c-1.25-1.24-2.503-2.482-3.481-3.752C3.11 11.055 2.25 9.395 2.25 7.5Zm9 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
