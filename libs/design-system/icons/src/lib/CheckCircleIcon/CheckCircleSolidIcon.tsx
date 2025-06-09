import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CheckCircleSolidIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 12, width = 12, fill = colors['gray-500'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9 .75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 9 .75Zm3.905 6.53a.75.75 0 0 0-1.06-1.06l-3.97 3.97-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.5-4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export { CheckCircleSolidIcon };
