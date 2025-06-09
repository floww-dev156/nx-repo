import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function TMBaseCheckBoxSelectedIcon(props: IconPropsType) {
  const { fill = colors['blue-500'], ...other } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...other}
    >
      <rect width={16} height={16} fill={fill} rx="4"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.64 4.232a1 1 0 01.128 1.408l-5 6a1 1 0 01-1.475.067l-3-3a1 1 0 011.414-1.414l2.226 2.226 4.299-5.16a1 1 0 011.408-.127z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TMBaseCheckBoxSelectedIcon;
