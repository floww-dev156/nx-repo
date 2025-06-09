import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface ZapOffIconPropTypes {
  width?: number | string;
  height?: number | string;
  fill?: string;
}
const ZapOffIcon = (props: ZapOffIconPropTypes) => {
  const { fill = colors['gray-700'], width = 16, height = 16, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M5.333 5.333 2.73 8.46c-.233.279-.349.418-.35.536-.002.103.043.2.123.264.092.075.273.075.637.075H8l-.667 5.333 3.334-4m-.234-4h2.428c.364 0 .545 0 .637.074.08.064.125.162.124.264-.002.118-.118.258-.351.537l-.904 1.085M7.048 3.275l1.619-1.942-.4 3.199M14 14 2 2"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ZapOffIcon };
