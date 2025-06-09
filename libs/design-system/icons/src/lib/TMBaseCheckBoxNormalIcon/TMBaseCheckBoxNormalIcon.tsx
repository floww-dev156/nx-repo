import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function TMBaseCheckBoxNormalIcon(props: IconPropsType) {
  const { stroke = colors['blue-gray-300'], ...other } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...other}
    >
      <rect
        width={15}
        height={15}
        x="0.5"
        y="0.5"
        stroke={stroke}
        rx="3.5"
      ></rect>
    </svg>
  );
}

export default TMBaseCheckBoxNormalIcon;
