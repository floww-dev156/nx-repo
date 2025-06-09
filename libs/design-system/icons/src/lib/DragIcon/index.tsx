import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';
import { IconPropsType } from '../types';

function DragIcon(props: IconPropsType) {
  const { fill = colors['gray-500'], ...other } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...other}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.333 2a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667zm0 4.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zm0 4.666a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667zM10.667 2a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667zm0 4.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zm0 4.666a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export { DragIcon };
