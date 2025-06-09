import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const UserIcon = (props: IconPropsType) => {
  const { fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...rest}
      viewBox="0 0 32 32"
    >
      <path
        d="M16 20c-4.227 0-7.986 2.04-10.379 5.208-.515.682-.772 1.022-.764 1.483.007.356.23.805.51 1.025.363.284.865.284 1.87.284h17.527c1.004 0 1.506 0 1.869-.284.28-.22.503-.67.51-1.025.008-.46-.25-.801-.764-1.483C23.986 22.041 20.227 20 16 20ZM16 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { UserIcon };
