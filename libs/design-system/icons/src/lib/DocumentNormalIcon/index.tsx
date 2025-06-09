import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function DocumentNormalIcon(props: IconPropsType) {
  const { fill = colors['blue-gray-600'], ...other } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...other}
    >
      <path
        fill={fill}
        d="M9.333 4.5H6.667c-.64 0-1.834 0-1.834-1.833C4.833.833 6.027.833 6.667.833h2.666c.64 0 1.834 0 1.834 1.834 0 .64 0 1.833-1.834 1.833zM6.667 1.833c-.66 0-.834 0-.834.834 0 .833.174.833.834.833h2.666c.834 0 .834-.173.834-.833 0-.834-.174-.834-.834-.834H6.667z"
      ></path>
      <path
        fill={fill}
        d="M10 15.167H6c-3.747 0-4.5-1.72-4.5-4.5v-4c0-3.04 1.1-4.34 3.807-4.48a.5.5 0 01.526.473c.014.28-.2.507-.473.52-1.893.107-2.86.673-2.86 3.487v4c0 2.466.487 3.5 3.5 3.5h4c3.013 0 3.5-1.034 3.5-3.5v-4c0-2.814-.967-3.38-2.86-3.487a.504.504 0 01-.473-.527.504.504 0 01.526-.473C13.4 2.327 14.5 3.627 14.5 6.66v4c0 2.787-.753 4.507-4.5 4.507z"
      ></path>
    </svg>
  );
}

export { DocumentNormalIcon };
