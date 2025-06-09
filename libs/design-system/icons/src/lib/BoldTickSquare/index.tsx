import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function BoldTickSquare({
  fill = colors['blue-600'],
  width = 18,
  height = 18,
  ...rest
}: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...rest}
    >
      <path
        d="M12.143 1.5H5.857C3.127 1.5 1.5 3.127 1.5 5.857v6.278c0 2.738 1.627 4.365 4.357 4.365h6.278c2.73 0 4.357-1.627 4.357-4.357V5.857c.008-2.73-1.62-4.357-4.35-4.357Zm.442 5.775-4.253 4.252a.562.562 0 0 1-.795 0L5.415 9.405a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0l1.725 1.725L11.79 6.48a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795Z"
        fill="#2563EB"
      />
    </svg>
  );
}

export { BoldTickSquare };
