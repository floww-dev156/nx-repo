import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const FilterLinesIcon = (props) => {
  const { width = 18, height = 18, stroke = colors['gray-500'] } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        d="M4.5 9h9M2.25 4.5h13.5m-9 9h4.5"
        stroke={stroke}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { FilterLinesIcon };
