import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const FileCheck02Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['success-600'],
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
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.333 8.333v-3.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H5.867c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.875.874c-.217.428-.217.988-.217 2.108v6.934c0 1.12 0 1.68.217 2.108a2 2 0 0 0 .875.874c.427.218.987.218 2.108.218H8m1.333-7.334h-4M6.666 10H5.333m5.333-5.333H5.333m4.333 8L11 14l3-3"
      />
    </svg>
  );
};
