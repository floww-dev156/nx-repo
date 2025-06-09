import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlertCircleFillIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['orange-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 20 20"
      {...rest}
      fill="none"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10 .833a9.167 9.167 0 1 0 0 18.334A9.167 9.167 0 0 0 10 .833m.834 5.834a.833.833 0 0 0-1.667 0V10a.833.833 0 1 0 1.667 0zM10 12.5a.833.833 0 1 0 0 1.667h.008a.833.833 0 0 0 0-1.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default AlertCircleFillIcon;
