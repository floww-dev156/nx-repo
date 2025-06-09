import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SearchMdIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 18, fill = colors['gray-600'], width = 18, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M8.25 3a5.25 5.25 0 1 0 3.642 9.031.76.76 0 0 1 .139-.139A5.25 5.25 0 0 0 8.25 3Zm5.274 9.463a6.75 6.75 0 1 0-1.06 1.06l2.756 2.757a.75.75 0 1 0 1.06-1.06l-2.756-2.757Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SearchMdIcon;
