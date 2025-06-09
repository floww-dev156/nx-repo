import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FileShield02Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 48, width = 48, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 54 50"
      {...rest}
    >
      <g
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
        opacity={0.2}
      >
        <path
          fill={fill}
          strokeWidth={1.5}
          d="M45.644 44.11s5.055-4.316 3.945-8.46l-1.296-4.834-4.63-.377a4.822 4.822 0 0 0-3.141.841l-3.82 2.642 1.296 4.834c1.11 4.144 7.646 5.353 7.646 5.353Z"
          opacity={0.12}
        />
        <path
          strokeWidth={3}
          d="m32.74 26.861-11.591 3.106m5.934 6.692-3.864 1.036m11.314-19.596-15.455 4.14m24.735-.415-1.656-6.182c-.87-3.246-1.305-4.869-2.268-5.94a6 6 0 0 0-3.212-1.858c-1.409-.3-3.032.136-6.278 1.006l-12.363 3.312c-3.246.87-4.87 1.305-5.94 2.269a6 6 0 0 0-1.854 3.211c-.3 1.41.136 3.032 1.005 6.278l5.384 20.091c.87 3.246 1.304 4.869 2.268 5.94a6 6 0 0 0 3.212 1.854c1.409.299 3.031-.136 6.277-1.006l7.148-1.915m10.108-4.779s5.055-4.315 3.945-8.459l-1.295-4.834-4.631-.377a4.822 4.822 0 0 0-3.141.841l-3.82 2.642 1.296 4.834c1.11 4.144 7.646 5.353 7.646 5.353Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 12.858 46.364.435l12.424 46.364-46.365 12.423z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { FileShield02Icon };
