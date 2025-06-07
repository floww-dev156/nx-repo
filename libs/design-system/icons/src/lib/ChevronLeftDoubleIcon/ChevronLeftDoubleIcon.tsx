import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ChevronLeftDoubleIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-700'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.389"
        d="M13.167 12.472L9.695 9l3.472-3.472m-4.861 6.944L4.834 9l3.472-3.472"
      ></path>
    </svg>
  );
};

export default ChevronLeftDoubleIcon;
