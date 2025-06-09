import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

import { IconPropsType } from '../types';

const Download01Icon = (props: IconPropsType) => {
  const { width = 16, height = 16, fill = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10v.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C12.48 14 11.92 14 10.8 14H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 12.48 2 11.92 2 10.8V10m9.333-3.333L8 10m0 0L4.667 6.667M8 10V2"
      />
    </svg>
  );
};
export default Download01Icon;
