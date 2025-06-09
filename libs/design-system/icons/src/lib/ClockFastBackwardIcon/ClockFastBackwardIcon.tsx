import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ClockFastBackwardIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, fill = colors['gray-600'], width = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M12.667 4a8 8 0 1 1-6.223 13.028 1 1 0 0 0-1.555 1.258A9.98 9.98 0 0 0 12.666 22c5.523 0 10-4.477 10-10s-4.477-10-10-10c-5.134 0-9.364 3.87-9.934 8.851l-.058-.058a1 1 0 1 0-1.415 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 1 0-1.413-1.414l-.568.568A8 8 0 0 1 12.666 4m-.334 2a1 1 0 0 1 1 1v4.465l2.555 1.703a1 1 0 1 1-1.11 1.664l-3-2a1 1 0 0 1-.445-.832V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default ClockFastBackwardIcon;
