import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

interface PropsType extends IconPropsType {
  innerBgColor?: string;
  outerBgColor?: string;
}

const FeaturedUserCheckIcon = (props: PropsType) => {
  const {
    width = 56,
    height = 56,
    fill = colors['primary-600'],
    outerBgColor = colors['primary-100'],
    innerBgColor = colors['primary-50'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 56 56"
      {...rest}
    >
      <rect width={48} height={48} x={4} y={4} fill={outerBgColor} rx={24} />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m32 34 2 2 4-4m-10-1h-4c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.165 2.164C18 34.204 18 35.136 18 37m13.5-17.71a4.001 4.001 0 0 1 0 7.42m-2-3.71a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <rect
        width={48}
        height={48}
        x={4}
        y={4}
        stroke={innerBgColor}
        strokeWidth={8}
        rx={24}
      />
    </svg>
  );
};

export default FeaturedUserCheckIcon;
