import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const OutlineFlagIcon = ({
  fill = colors['blue-gray-500'],
  ...rest
}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={rest.width ? rest.width : 24}
    height={rest.height ? rest.height : 24}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={fill}
      d="M3.433 15.167a.504.504 0 01-.5-.5V1.333c0-.273.227-.5.5-.5.274 0 .5.227.5.5v13.334c0 .273-.226.5-.5.5z"
    ></path>
    <path
      fill={fill}
      d="M10.9 11.167H3.433a.504.504 0 01-.5-.5c0-.274.227-.5.5-.5H10.9c.727 0 1.067-.194 1.133-.36.067-.167-.033-.54-.553-1.054l-.8-.8a1.68 1.68 0 01-.547-1.2 1.85 1.85 0 01.547-1.373l.8-.8c.493-.493.647-.893.573-1.067-.073-.173-.453-.346-1.153-.346H3.433a.5.5 0 110-1H10.9c1.46 0 1.927.606 2.08.966.147.36.247 1.12-.793 2.16l-.8.8a.87.87 0 00-.254.634c.007.2.087.38.227.506l.827.82c1.02 1.02.92 1.78.773 2.147-.153.353-.627.967-2.06.967z"
    ></path>
  </svg>
);

export { OutlineFlagIcon };
