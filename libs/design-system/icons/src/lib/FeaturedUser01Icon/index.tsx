import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface FeaturedUserIconProps {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}

const FeaturedUser01Icon = (props: FeaturedUserIconProps) => {
  const {
    fill = colors['primary-600'],
    outerBgColor = colors['primary-50'],
    innerBgColor = colors['primary-100'],
    width = 56,
    height = 56,
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      {...rest}
    >
      <rect width={48} height={48} x={4} y={4} fill={innerBgColor} rx={24} />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M36 37c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C20 34.907 20 35.604 20 37m12.5-13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      />
      <rect
        width={48}
        height={48}
        x={4}
        y={4}
        stroke={outerBgColor}
        strokeWidth={8}
        rx={24}
      />
    </svg>
  );
};

export default FeaturedUser01Icon;
