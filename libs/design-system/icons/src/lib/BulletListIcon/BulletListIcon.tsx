import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';

import { IconPropsType } from '../types';

const BulletListIcon = (props: IconPropsType) => {
  const {
    height = 18,
    width = 18,
    fill = colors['blue-gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 19 14"
      {...rest}
    >
      <path
        fill={fill}
        d="M1.834 2.333a1.167 1.167 0 100-2.333 1.167 1.167 0 000 2.333zM1.834 8.166a1.167 1.167 0 100-2.333 1.167 1.167 0 000 2.333zM18.168 11.913H4.412v1.965h13.755v-1.965zM18.168.123H4.412v1.965h13.755V.123zM18.168 6.016H4.412V7.98h13.755V6.016zM1.834 14a1.167 1.167 0 100-2.333 1.167 1.167 0 000 2.333z"
      ></path>
    </svg>
  );
};

export { BulletListIcon };
