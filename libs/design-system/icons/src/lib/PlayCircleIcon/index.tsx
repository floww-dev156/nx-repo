import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface PlayCircleIconProps {
  width?: number | string;
  height?: number | string;

  fill?: string;
}
const PlayCircleIcon = (props: PlayCircleIconProps) => {
  const {
    fill = colors['success-600'],
    width = 18,
    height = 18,
    ...rest
  } = props;
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
        d="M9 .75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 9 .75ZM7.2 6.087c-.075.1-.075.279-.075.637v4.552c0 .358 0 .537.075.637a.375.375 0 0 0 .273.15c.125.008.275-.089.576-.282l3.54-2.276c.262-.168.393-.252.438-.36a.375.375 0 0 0 0-.291c-.045-.107-.176-.19-.437-.359L8.05 6.22c-.302-.193-.452-.29-.577-.281a.375.375 0 0 0-.273.15Z"
        fill={fill}
      />
    </svg>
  );
};

export { PlayCircleIcon };
