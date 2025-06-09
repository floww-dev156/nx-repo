import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function IntersectCircleIcon(props: IconPropsType) {
  const {
    fill = colors['green-light-600'],
    width = 20,
    height = 20,
    ...otherProps
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fill={fill}
        d="M1 9a8 8 0 0115.797-1.797 8 8 0 00-9.595 9.595A8.003 8.003 0 011 9z"
      ></path>
      <path
        fill={fill}
        d="M7.203 16.797a8 8 0 009.595-9.595 8 8 0 11-9.595 9.595z"
      ></path>
    </svg>
  );
}

export default IntersectCircleIcon;
