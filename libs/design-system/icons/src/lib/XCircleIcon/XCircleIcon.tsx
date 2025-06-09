import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function XCircleIcon(iconProps: IconPropsType) {
  const {
    fill = colors['gray-500'],
    width = 16,
    height = 16,
    ...props
  } = iconProps;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 .667a7.333 7.333 0 100 14.666A7.333 7.333 0 008 .667zm2.471 4.862c.26.26.26.682 0 .942L8.943 8l1.528 1.529a.667.667 0 01-.942.942L8 8.943 6.471 10.47a.667.667 0 11-.942-.942L7.057 8 5.53 6.471a.667.667 0 01.942-.942L8 7.057 9.529 5.53c.26-.26.682-.26.942 0z"
        fill={fill}
      />
    </svg>
  );
}

export default XCircleIcon;
