import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const SolidChevronLeftIcon = ({
  fill = colors['blue-gray-500'],
  width = 16,
  height = 16,
  ...rest
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.165 4.234a.8.8 0 0 1 0 1.132L7.531 8l2.634 2.634a.8.8 0 0 1-1.131 1.132l-3.2-3.2a.8.8 0 0 1 0-1.132l3.2-3.2a.8.8 0 0 1 1.131 0Z"
      fill={fill}
    />
  </svg>
);

export { SolidChevronLeftIcon };
