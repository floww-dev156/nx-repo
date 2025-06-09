import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CheckCircleBrokenIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 18,
    width = 18,
    stroke = colors['success-500'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_812_53196)">
        <path
          d="M16.5 8.314v.69a7.5 7.5 0 11-4.447-6.855M16.5 3L9 10.508l-2.25-2.25"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_812_53196">
          <path fill="#fff" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CheckCircleBrokenIcon };
