import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedUploadCloud02Icon = (
  props: IconPropsType
): React.ReactElement => {
  const { stroke = colors['primary-600'], ...rest } = props;

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 16 4-4m0 0 4 4m-4-4v9m8-4.257A5.5 5.5 0 0 0 16.5 7a.62.62 0 0 1-.534-.302 7.5 7.5 0 1 0-11.78 9.096"
      />
    </svg>
  );
};

export { FeaturedUploadCloud02Icon };
