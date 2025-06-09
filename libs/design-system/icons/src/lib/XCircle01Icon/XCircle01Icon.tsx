import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const XCircle01Icon = (iconProps: IconPropsType): React.ReactElement => {
  const {
    fill = colors['base-white'],
    stroke = colors['gray-600'],
    width = 40,
    height = 40,
    ...props
  } = iconProps;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M19.9997 36.6663C29.2044 36.6663 36.6663 29.2044 36.6663 19.9997C36.6663 10.7949 29.2044 3.33301 19.9997 3.33301C10.7949 3.33301 3.33301 10.7949 3.33301 19.9997C3.33301 29.2044 10.7949 36.6663 19.9997 36.6663Z"
        fill={fill}
      />
      <path
        d="M24.9997 14.9997L14.9997 24.9997M14.9997 14.9997L24.9997 24.9997M36.6663 19.9997C36.6663 29.2044 29.2044 36.6663 19.9997 36.6663C10.7949 36.6663 3.33301 29.2044 3.33301 19.9997C3.33301 10.7949 10.7949 3.33301 19.9997 3.33301C29.2044 3.33301 36.6663 10.7949 36.6663 19.9997Z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
