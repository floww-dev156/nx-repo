import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface FeaturedActivityIconProps {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}
const FeaturedActivityIcon = (
  props: FeaturedActivityIconProps
): React.ReactElement => {
  const {
    fill = colors['primary-600'],
    outerBgColor = colors['primary-50'],
    innerBgColor = colors['primary-100'],
    ...rest
  } = props;

  return (
    <svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...rest}
    >
      <rect x={2} y={2} width={32} height={32} rx={16} fill={innerBgColor} />
      <path
        d="M24.667 18H22l-2 6-4-12-2 6h-2.667"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={2}
        y={2}
        width={32}
        height={32}
        rx={16}
        stroke={outerBgColor}
        strokeWidth={4}
      />
    </svg>
  );
};

export { FeaturedActivityIcon };
