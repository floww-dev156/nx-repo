import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CircleOutlineIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['gray-600'],
    className,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      {...rest}
    >
      <g clip-path="url(#clip0_23076_208)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          className={className}
          d="M9.99967 2.50004C5.85754 2.50004 2.49967 5.8579 2.49967 10C2.49967 14.1422 5.85754 17.5 9.99967 17.5C14.1418 17.5 17.4997 14.1422 17.4997 10C17.4997 5.8579 14.1418 2.50004 9.99967 2.50004ZM0.833008 10C0.833008 4.93743 4.93706 0.833374 9.99967 0.833374C15.0623 0.833374 19.1663 4.93743 19.1663 10C19.1663 15.0626 15.0623 19.1667 9.99967 19.1667C4.93706 19.1667 0.833008 15.0626 0.833008 10Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_23076_208">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CircleOutlineIcon;
