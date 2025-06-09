import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Cube01Icon = (props: IconPropsType) => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-600'],
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
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.083 6.065L10 10m0 0L2.917 6.065M10 10v7.917m7.5-4.535V6.618c0-.286 0-.428-.042-.556a.833.833 0 00-.178-.303c-.091-.099-.216-.168-.466-.307l-6.166-3.426c-.237-.13-.355-.197-.48-.222a.833.833 0 00-.336 0c-.125.025-.243.091-.48.222L3.186 5.452c-.25.139-.375.208-.465.307a.833.833 0 00-.179.303c-.042.128-.042.27-.042.556v6.764c0 .286 0 .428.042.556a.833.833 0 00.179.303c.09.099.215.168.465.307l6.166 3.426c.237.13.355.197.48.222.11.023.225.023.336 0 .125-.026.243-.091.48-.222l6.166-3.426c.25-.139.375-.208.465-.307a.833.833 0 00.179-.303c.042-.128.042-.27.042-.556z"
      ></path>
    </svg>
  );
};

export default Cube01Icon;
