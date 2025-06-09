import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface StopCircleIconProps {
  width?: number | string;
  height?: number | string;

  fill?: string;
}
const StopCircleIcon = (props: StopCircleIconProps) => {
  const { fill = colors['gray-600'], width = 18, height = 18, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 .75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 9 .75ZM6.082 6.41C6 6.57 6 6.78 6 7.2v3.6c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082h3.6c.42 0 .63 0 .79-.082a.751.751 0 0 0 .328-.327C12 11.43 12 11.22 12 10.8V7.2c0-.42 0-.63-.082-.79a.75.75 0 0 0-.327-.328C11.43 6 11.22 6 10.8 6H7.2c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328Z"
        fill={fill}
      />
    </svg>
  );
};

export { StopCircleIcon };
