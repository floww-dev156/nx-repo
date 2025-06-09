import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const FileIcon5 = (props) => {
  const { width = 20, height = 20, fill = colors['gray-400'] } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...props}
      fill="none"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.667 1.891v3.442c0 .467 0 .7.09.879.08.156.208.284.365.364.178.09.412.09.878.09h3.442m-4.775 7.5h-5m6.667-3.333H6.667m10-2.51v6.01c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272H7.334c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.535-.272-1.235-.272-2.635V5.667c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093c.534-.272 1.234-.272 2.635-.272h2.676c.611 0 .917 0 1.205.069.255.06.499.162.723.299.252.155.468.37.9.803l2.657 2.657c.433.432.649.649.803.9.138.224.239.468.3.723.069.288.069.594.069 1.205Z"
      />
    </svg>
  );
};
export { FileIcon5 };
