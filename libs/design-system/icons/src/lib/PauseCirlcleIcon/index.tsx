import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface PauseCircleIconProps {
  width?: number | string;
  height?: number | string;

  fill?: string;
}

const PauseCircleIcon = (props: PauseCircleIconProps) => {
  const {
    fill = colors['warning-600'],
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
        d="M9 .75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 9 .75Zm-1.125 6a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Zm3.75 0a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"
        fill={fill}
      />
    </svg>
  );
};

export { PauseCircleIcon };
