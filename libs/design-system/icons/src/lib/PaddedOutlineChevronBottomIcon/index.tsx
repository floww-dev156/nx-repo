import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';

import { IconPropsType } from '../types';

function PaddedOutlineChevronBottomIcon(props: IconPropsType) {
  const { width = 20, height = 20, fill = colors['blue-gray-400'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export { PaddedOutlineChevronBottomIcon };
