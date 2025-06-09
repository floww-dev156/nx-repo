import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface FeaturedUserIconProps {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}

const FeaturedUserIcon = (props: FeaturedUserIconProps) => {
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
        d="M18 20c-2.113 0-3.993 1.02-5.19 2.604-.257.34-.386.511-.381.742a.743.743 0 0 0 .255.512c.18.142.432.142.934.142h8.764c.502 0 .753 0 .934-.142a.743.743 0 0 0 .255-.512c.005-.23-.124-.401-.382-.742C21.993 21.02 20.113 20 18 20ZM18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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

export { FeaturedUserIcon };
