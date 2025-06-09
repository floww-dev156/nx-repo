import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

function BoldArrowRightIcon({
  fill = colors['blue-gray-500'],
  ...rest
}: IconPropsType) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="m15.2 10.49-1.97-1.97-3.21-3.21c-.68-.67-1.84-.19-1.84.77v11.84c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.82.83-2.18 0-3.01Z"
        fill={fill}
      />
    </svg>
  );
}

export { BoldArrowRightIcon };
