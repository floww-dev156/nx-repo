import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

const GitBranchIcon = (props) => {
  const { width = 20, height = 20, fill = colors['gray-400'] } = props;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.333 2.5a.833.833 0 0 0-1.666 0v8.534c0 .671 0 1.225.037 1.676.038.468.12.899.326 1.303.32.628.83 1.137 1.457 1.457.404.206.835.288 1.303.327.451.036 1.005.036 1.676.036h5.306A3.335 3.335 0 0 0 18.333 15a3.333 3.333 0 0 0-6.561-.833H6.5c-.714 0-1.199 0-1.574-.031-.365-.03-.552-.084-.683-.15a1.667 1.667 0 0 1-.728-.73c-.066-.13-.12-.316-.15-.682-.03-.375-.032-.86-.032-1.574V7.5h8.439a3.335 3.335 0 0 0 6.561-.833 3.333 3.333 0 0 0-6.561-.834H3.333V2.5Z"
        fill={fill}
      />
    </svg>
  );
};

export { GitBranchIcon };
