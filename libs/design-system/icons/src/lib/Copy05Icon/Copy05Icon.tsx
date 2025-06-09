import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const Copy05Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.667 13.334v2.333c0 .933 0 1.4.181 1.757.16.313.415.568.729.728.356.182.823.182 1.756.182h6.334c.933 0 1.4 0 1.756-.182.314-.16.569-.415.729-.728.181-.357.181-.824.181-1.757V9.334c0-.934 0-1.4-.181-1.757a1.667 1.667 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182h-2.334m-9 6.667h6.334c.933 0 1.4 0 1.756-.182.314-.16.569-.415.729-.728.181-.357.181-.824.181-1.757V4.334c0-.934 0-1.4-.181-1.757a1.667 1.667 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182H4.333c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.729.728-.181.357-.181.823-.181 1.757v6.333c0 .933 0 1.4.181 1.757.16.313.415.568.729.728.356.182.823.182 1.756.182Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
