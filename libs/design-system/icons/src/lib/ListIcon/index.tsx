import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const ListIcon = (props) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-500'],
    strokeWidth = 1.667,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 9h-9m9-4.5h-9m9 9h-9m-3-4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0-4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ListIcon };
