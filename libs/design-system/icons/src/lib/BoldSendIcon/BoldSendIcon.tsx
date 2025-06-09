import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function BoldSendIcon(props: IconPropsType) {
  const { fill = `${colors['blue-600']}`, width = 20, height = 20 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        d="M15.058 7.092L7.925 3.525c-4.792-2.4-6.758-.433-4.358 4.358l.725 1.45c.208.425.208.917 0 1.342l-.725 1.442c-2.4 4.791-.442 6.758 4.358 4.358l7.133-3.567c3.2-1.6 3.2-4.216 0-5.816zm-2.691 3.533h-4.5A.63.63 0 017.242 10a.63.63 0 01.625-.625h4.5a.63.63 0 01.625.625.63.63 0 01-.625.625z"
      ></path>
    </svg>
  );
}

export { BoldSendIcon };
