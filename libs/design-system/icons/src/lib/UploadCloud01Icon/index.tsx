import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const UploadCloud01Icon = (props: IconPropsType) => {
  const {
    stroke = colors['gray-700'],
    width = 20,
    height = 20,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.333 13.535a3.75 3.75 0 0 1 1.733-6.852 5.001 5.001 0 0 1 9.868 0 3.75 3.75 0 0 1 1.733 6.852m-10-.202L10 10m0 0 3.333 3.333M10 10v7.5"
      />
    </svg>
  );
};

export default UploadCloud01Icon;
