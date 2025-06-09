import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ColorsIcon = (props: IconPropsType) => {
  const { fill = colors['primary-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20.472a6 6 0 1 0 5.58-10.262m-11.16 0a6 6 0 1 0 7.16 3.58M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
      />
    </svg>
  );
};

export { ColorsIcon };
