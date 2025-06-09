import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Image03OutlineIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    stroke = colors['gray-700'],
    strokeWidth = '1.667',
    width = 20,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M3.56 17.273l5.497-5.497c.33-.33.495-.495.685-.557a.833.833 0 01.515 0c.19.062.356.227.686.557l5.46 5.46M11.667 12.5l2.39-2.39c.33-.33.495-.496.685-.557a.834.834 0 01.515 0c.19.061.356.226.686.556l2.39 2.391m-10-5A1.667 1.667 0 115 7.5a1.667 1.667 0 013.333 0zm-2.667 10h8.667c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 001.093-1.092c.272-.535.272-1.235.272-2.635v-7c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 00-1.093-1.093c-.535-.272-1.235-.272-2.635-.272H5.667c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 00-1.093 1.093C1.667 4.4 1.667 5.1 1.667 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.092c.534.273 1.234.273 2.635.273z"
      ></path>
    </svg>
  );
};

export default Image03OutlineIcon;
