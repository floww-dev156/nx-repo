import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CurrencyRupee02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, fill = colors['gray-600'], width = 20 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill="none"
      viewBox="0 0 18 19"
    >
      <g clipPath="url(#clip0_24514_32592)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M9 3.186a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M.75 9.936a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M5.625 5.81a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5h-1.38c.21.348.352.732.43 1.124h.95a.75.75 0 0 1 0 1.5h-.95a3.4 3.4 0 0 1-.727 1.54c-.4.472-.94.822-1.595.985l2.622 2.145a.75.75 0 1 1-.95 1.161L5.9 11.641a.75.75 0 0 1 .475-1.33H7.5c.617 0 1.031-.235 1.303-.555.137-.162.245-.356.321-.57H6.375a.75.75 0 1 1 0-1.5h2.75a1.8 1.8 0 0 0-.322-.57C8.53 6.794 8.117 6.56 7.5 6.56H6.375a.75.75 0 0 1-.75-.75"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_24514_32592">
          <path fill="#fff" d="M0 .936h18v18H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CurrencyRupee02Icon;
