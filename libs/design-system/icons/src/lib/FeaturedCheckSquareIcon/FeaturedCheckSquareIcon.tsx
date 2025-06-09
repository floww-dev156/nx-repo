import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface FeaturedCheckSquareIconProps {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}

const FeaturedCheckSquareIcon = (props: FeaturedCheckSquareIconProps) => {
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
        d="m15 18 2 2 4-4m-5.8 8h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C24 22.48 24 21.92 24 20.8v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C22.48 12 21.92 12 20.8 12h-5.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 13.52 12 14.08 12 15.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 24 14.08 24 15.2 24Z"
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
export { FeaturedCheckSquareIcon };
