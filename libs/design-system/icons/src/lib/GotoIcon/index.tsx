import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function GotoIcon(props: IconPropsType) {
  const { fill = colors['blue-gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M6.667 4H4c-.736 0-1.333.597-1.333 1.334V12c0 .737.597 1.334 1.333 1.334h6.667c.736 0 1.333-.597 1.333-1.334V9.334M9.333 2.667h4m0 0v4m0-4L6.667 9.334"
      ></path>
    </svg>
  );
}

export { GotoIcon };
