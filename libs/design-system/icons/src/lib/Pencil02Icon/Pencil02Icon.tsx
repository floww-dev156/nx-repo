import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export const Pencil02Icon = (props: IconPropsType) => {
  const {
    width = 18,
    height = 18,
    stroke = colors['gray-600'],
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
          d="M15 1.667 18.333 5M1.667 18.334l1.063-3.9c.07-.255.105-.382.158-.5a1.67 1.67 0 0 1 .173-.3c.077-.105.17-.198.357-.384l8.61-8.612c.166-.165.248-.247.343-.278a.417.417 0 0 1 .258 0c.095.03.178.113.343.278l2.39 2.39c.165.166.248.248.278.344a.417.417 0 0 1 0 .257c-.03.095-.113.178-.278.343l-8.611 8.61c-.187.187-.28.28-.385.357a1.666 1.666 0 0 1-.299.174c-.118.053-.246.088-.5.157l-3.9 1.064Z"
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
