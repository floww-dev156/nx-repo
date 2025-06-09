import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function DocumentIcon(props: IconPropsType) {
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
        d="M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h4c3.62 0 5.167 1.547 5.167 5.167v4c0 3.62-1.547 5.167-5.167 5.167zM6 1.833C2.927 1.833 1.833 2.927 1.833 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V6c0-3.073-1.094-4.167-4.167-4.167H6z"
      ></path>
      <path
        fill={fill}
        d="M10.5 6.5h-5A.504.504 0 015 6c0-.273.227-.5.5-.5h5c.273 0 .5.227.5.5s-.227.5-.5.5zM10.5 10.5h-5A.504.504 0 015 10c0-.273.227-.5.5-.5h5c.273 0 .5.227.5.5s-.227.5-.5.5z"
      ></path>
    </svg>
  );
}

export { DocumentIcon };
