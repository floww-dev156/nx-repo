import React, { ReactElement } from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Rocker02Icon = (props: IconPropsType): ReactElement => {
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
        strokeWidth="1.5"
        d="M10 12.5L7.5 10m2.5 2.5a18.625 18.625 0 003.333-1.667M10 12.5v4.167s2.525-.459 3.333-1.667c.9-1.35 0-4.167 0-4.167M7.5 10a18.333 18.333 0 011.667-3.292 10.733 10.733 0 019.166-5.041c0 2.266-.65 6.25-5 9.166M7.5 10H3.333S3.792 7.475 5 6.667c1.35-.9 4.167 0 4.167 0M3.75 13.75c-1.25 1.05-1.667 4.167-1.667 4.167S5.2 17.5 6.25 16.25c.592-.7.583-1.775-.075-2.425a1.817 1.817 0 00-2.425-.075z"
      ></path>
    </svg>
  );
};

export { Rocker02Icon };
