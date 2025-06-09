import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';
import { IconPropsType } from '../types';

const SavedCloudIcon = ({
  fill = colors['blue-gray-400'],
  width = 16,
  height = 16,
  ...rest
}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 16"
    {...rest}
  >
    <path
      fill="#667085"
      fillRule="evenodd"
      d="M3.5 6.095a4.668 4.668 0 019 0 3.668 3.668 0 011.204 6.62.667.667 0 01-.742-1.108 2.334 2.334 0 00-1.077-4.264.667.667 0 01-.596-.555 3.334 3.334 0 00-6.578 0 .667.667 0 01-.597.555 2.334 2.334 0 00-1.077 4.264.667.667 0 01-.741 1.108A3.668 3.668 0 013.5 6.095z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#667085"
      fillRule="evenodd"
      d="M10.472 8.862c.26.26.26.682 0 .943L7.805 12.47a.667.667 0 01-.943 0L5.53 11.138a.667.667 0 11.943-.943l.861.862L9.53 8.862c.26-.26.682-.26.943 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { SavedCloudIcon };
