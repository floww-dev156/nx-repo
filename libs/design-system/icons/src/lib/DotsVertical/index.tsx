import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface DotsVerticalPropTypes {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const DotsVertical = (props: DotsVerticalPropTypes) => {
  const { fill = colors['gray-600'], width = 20, height = 20, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        d="M10 10.834a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667ZM10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5ZM10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { DotsVertical };
