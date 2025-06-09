import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const OutlineCopyIcon = (iconProps: IconPropsType) => {
  const {
    stroke = colors['gray-600'],
    width = 20,
    height = 20,
    ...props
  } = iconProps;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M13.833 6.667V4.333c0-.933 0-1.4-.181-1.756a1.667 1.667 0 0 0-.729-.729c-.356-.181-.823-.181-1.757-.181H4.833c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756v6.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181h2.333m2.667 5h6.333c.934 0 1.4 0 1.757-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756V9.333c0-.933 0-1.4-.181-1.756a1.667 1.667 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H9.832c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756v6.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181Z"
      />
    </svg>
  );
};

export { OutlineCopyIcon };
