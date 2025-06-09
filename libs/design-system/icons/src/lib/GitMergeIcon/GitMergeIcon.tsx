import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const GitMergeIcon = (props: IconPropsType) => {
  const {
    width = 16,
    height = 16,
    fill = 'none',
    stroke = colors['primary-600'],
    ...rest
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <g fill={stroke} opacity={0.12}>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </g>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0a6 6 0 0 1-6-6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v8"
      />
    </svg>
  );
};

export default GitMergeIcon;
