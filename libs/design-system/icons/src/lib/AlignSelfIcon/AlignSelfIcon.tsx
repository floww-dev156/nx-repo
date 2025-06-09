import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlignSelfIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, width = 24, fill = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 10H3m17-4H3m17 8H3m13 4H3"
      ></path>
    </svg>
  );
};

export { AlignSelfIcon };
