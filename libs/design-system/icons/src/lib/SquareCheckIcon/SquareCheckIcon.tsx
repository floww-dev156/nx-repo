import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SquareCheckIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 32, width = 32 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="m10 16 4 4 8-8M10.4 28h11.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C28 24.96 28 23.84 28 21.6V10.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C24.96 4 23.84 4 21.6 4H10.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v11.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 28 8.16 28 10.4 28Z"
        stroke="#1570EF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SquareCheckIcon };
