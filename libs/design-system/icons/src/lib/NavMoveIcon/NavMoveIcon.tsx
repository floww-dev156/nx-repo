import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const NavMoveIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['gray-700'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_5282_8736)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.591"
          d="M10 1v9.53"
        ></path>
        <path
          fill={fill}
          d="M12.467 5.62a.796.796 0 1 0-.162 1.584zm-.162 1.584c1.774.18 3.265.566 4.287 1.051.512.244.869.495 1.088.725.215.227.258.39.258.49h1.59c0-.626-.292-1.16-.694-1.585-.4-.42-.942-.773-1.56-1.066-1.236-.588-2.919-1.006-4.807-1.198zm5.633 2.266c0 .12-.064.338-.409.634-.342.294-.883.595-1.623.864-1.471.534-3.558.88-5.906.88v1.591c2.482 0 4.762-.363 6.45-.976.84-.305 1.576-.688 2.117-1.153.539-.464.962-1.083.962-1.84zM10 11.848c-2.349 0-4.436-.346-5.907-.88-.74-.269-1.281-.57-1.623-.864-.344-.296-.409-.513-.409-.634H.471c0 .757.423 1.376.961 1.84.54.465 1.277.848 2.117 1.153 1.688.613 3.968.976 6.45.976zM2.06 9.47c0-.1.043-.263.258-.49.22-.23.576-.481 1.088-.725 1.022-.485 2.513-.87 4.287-1.051L7.532 5.62c-1.888.192-3.57.61-4.808 1.197-.617.294-1.16.647-1.559 1.067C.763 8.31.47 8.845.47 9.47z"
        ></path>
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.591"
          d="M10 14.766V19M4.79 4.566l2.65 1.747a.2.2 0 0 1 .057.277L5.759 9.232"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_5282_8736">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default NavMoveIcon;
