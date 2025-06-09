import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  strokeWidth?: number;
}

const LayoutGrid2Icon = (props: Props) => {
  const {
    width = 32,
    height = 32,
    fill = colors['primary-600'],
    strokeWidth = 2,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      fill="none"
    >
      <g fill={fill} opacity={0.12}>
        <path d="M16 4h-5.6c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4V12h12V4ZM28 12H16v8h12v-8ZM16 20H4v1.6c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 28 8.16 28 10.4 28H16v-8Z" />
      </g>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M4 12h24M4 20h24M16 4v24M10.4 4h11.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C28 7.04 28 8.16 28 10.4v11.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C24.96 28 23.84 28 21.6 28H10.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 24.96 4 23.84 4 21.6V10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 4 8.16 4 10.4 4Z"
      />
    </svg>
  );
};
export { LayoutGrid2Icon };
