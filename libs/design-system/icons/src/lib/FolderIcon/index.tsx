import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

function FolderIcon(props: IconPropsType) {
  const { width = 16, height = 16, stroke = colors['blue-gray-600'] } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M2 4.667v6.666c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V6c0-.736-.597-1.333-1.333-1.333h-4L7.333 3.333h-4C2.597 3.333 2 3.93 2 4.667z"
      ></path>
    </svg>
  );
}

export { FolderIcon };
