import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Percent02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, stroke = colors['gray-400'], width = 20 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={stroke}
        fillRule="evenodd"
        d="M4.666 4a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.334m-2 .666a2 2 0 1 1 4 0 2 2 0 0 1-4 0m10.471-1.805c.26.26.26.683 0 .943l-9.333 9.333a.667.667 0 1 1-.943-.942l9.334-9.334c.26-.26.682-.26.942 0m-1.804 7.805a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333m-2 .667a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Percent02Icon;
