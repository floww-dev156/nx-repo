import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const RefreshCCW01Icon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M1.667 8.333S3.337 6.057 4.694 4.7a7.5 7.5 0 11-1.902 7.385m-1.127-3.75v-5m0 5h5"
      ></path>
    </svg>
  );
};

export { RefreshCCW01Icon };
