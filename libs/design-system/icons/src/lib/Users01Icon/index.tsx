import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Users01Icon = (props: IconPropsType) => {
  const { width = 20, height = 20, fill = colors['gray-400'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.333 17.5v-1.667a3.335 3.335 0 0 0-2.5-3.228m-2.917-9.863a3.334 3.334 0 0 1 0 6.182m1.25 8.576c0-1.553 0-2.33-.253-2.942a3.334 3.334 0 0 0-1.804-1.804c-.613-.254-1.39-.254-2.943-.254h-2.5c-1.553 0-2.33 0-2.942.254a3.334 3.334 0 0 0-1.804 1.804c-.253.612-.253 1.389-.253 2.942M11.25 5.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
      />
    </svg>
  );
};
export default Users01Icon;
