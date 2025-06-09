import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const FileX02Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['error-600'],
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
        d="M9.333 7.333h-4M6.666 10H5.333m5.333-5.333H5.333m8 3.333V4.533c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H5.867c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.875.874c-.217.428-.217.988-.217 2.108v6.934c0 1.12 0 1.68.217 2.108a2 2 0 0 0 .875.874c.427.218.987.218 2.108.218H8m2.666-4L14 14m0-3.333L10.666 14"
      />
    </svg>
  );
};
