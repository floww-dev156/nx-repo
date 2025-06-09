import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const FeaturedActionIcon = (props) => {
  const {
    width = 56,
    height = 56,
    bgStroke = colors['primary-50'],
    fillStroke = colors['primary-500'],
    shadow = colors['primary-100'],
  } = props;
  return (
    <svg
      width={66}
      height={66}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={5}
        y={5}
        width={width}
        height={height}
        rx={width / 2}
        fill={shadow}
      />
      <path
        opacity={0.12}
        d="M33 33a5.25 5.25 0 1 0 0-10.5A5.25 5.25 0 0 0 33 33Z"
        fill={fillStroke}
      />
      <path
        d="M33 36.5c-3.698 0-6.987 1.786-9.081 4.557-.451.596-.676.895-.669 1.298a1.3 1.3 0 0 0 .446.896c.317.249.757.249 1.636.249h15.336c.88 0 1.319 0 1.636-.249a1.3 1.3 0 0 0 .446-.896c.007-.403-.218-.702-.669-1.298C39.987 38.286 36.698 36.5 33 36.5ZM33 33a5.25 5.25 0 1 0 0-10.5A5.25 5.25 0 0 0 33 33Z"
        stroke={fillStroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={5}
        y={5}
        width={width}
        height={height}
        rx={width / 2}
        stroke={bgStroke}
        strokeWidth={10}
      />
    </svg>
  );
};

export { FeaturedActionIcon };
