import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

const DotsMoveIcon = (props) => {
  const { width = 18, height = 18, fill = colors['gray-500'] } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6-10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        fill={fill}
      />
    </svg>
  );
};

export { DotsMoveIcon };
