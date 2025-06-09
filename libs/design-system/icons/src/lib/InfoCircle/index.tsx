import { colors } from '@nx-repo/shared-style-guide';

import * as React from 'react';

import { IconPropsType } from '../types';

const InfoCircle = (props: IconPropsType) => {
  const { height = 16, width = 16, fill = colors['gray-400'], ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M9 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM.75 9a8.25 8.25 0 1 1 16.5 0A8.25 8.25 0 0 1 .75 9Zm7.5-3A.75.75 0 0 1 9 5.25h.008a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6ZM9 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { InfoCircle };
