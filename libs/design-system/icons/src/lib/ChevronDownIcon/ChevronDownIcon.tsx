import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronDownIcon = (props: IconPropsType): React.ReactElement => {
  const { fill = colors['blue-gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...rest}
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M4.234 5.834a.8.8 0 011.132 0L8 8.468l2.634-2.634a.8.8 0 011.132 1.131l-3.2 3.2a.8.8 0 01-1.132 0l-3.2-3.2a.8.8 0 010-1.131z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { ChevronDownIcon };
