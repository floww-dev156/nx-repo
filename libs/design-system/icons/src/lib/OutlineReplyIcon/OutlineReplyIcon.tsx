import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function OutlineReplyIcon(props: IconPropsType) {
  const { width, height, stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 12}
      height={height || 12}
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        stroke={stroke || colors['blue-gray-600']}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
        d="M1.5 5h5a4 4 0 014 4v1m-9-5l3 3m-3-3l3-3"
      ></path>
    </svg>
  );
}

export { OutlineReplyIcon };
