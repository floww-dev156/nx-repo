import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CheckCircleFillIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['success-600'],
    ...rest
  } = props;

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
        fill={fill}
        fillRule="evenodd"
        d="M10 .833a9.167 9.167 0 100 18.334A9.167 9.167 0 0010 .833zm4.34 7.256a.833.833 0 00-1.18-1.178l-4.41 4.41-1.91-1.91a.833.833 0 00-1.18 1.178l2.5 2.5a.833.833 0 001.18 0l5-5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { CheckCircleFillIcon };
