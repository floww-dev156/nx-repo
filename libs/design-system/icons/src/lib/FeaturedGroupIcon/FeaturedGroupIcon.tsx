import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedGroupIcon = (props: IconPropsType): React.ReactElement => {
  const { fill = colors['primary-600'], ...rest } = props;

  return (
    <svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      {...rest}
    >
      <rect x={4} y={4} width={48} height={48} rx={24} fill="#D1E9FF" />
      <path
        d="M35 37v-6m-3 3h6m-10-3h-4c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.165 2.164C18 34.204 18 35.136 18 37m13.5-17.71a4.001 4.001 0 0 1 0 7.42m-2-3.71a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={4}
        y={4}
        width={48}
        height={48}
        rx={24}
        stroke="#EFF8FF"
        strokeWidth={8}
      />
    </svg>
  );
};

export { FeaturedGroupIcon };
