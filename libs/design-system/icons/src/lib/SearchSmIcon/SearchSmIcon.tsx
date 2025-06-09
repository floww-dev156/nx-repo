import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SearchSmIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, fill = colors['gray-500'], width = 24, ...rest } = props;

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
        fill={fill ?? props.stroke}
        fillRule="evenodd"
        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default SearchSmIcon;
