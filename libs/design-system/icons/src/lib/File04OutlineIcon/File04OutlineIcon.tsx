import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const File04OutlineIcon = (props: IconPropsType): React.ReactElement => {
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
        d="M11.667 1.892v3.442c0 .466 0 .7.09.878.08.157.208.284.365.364.178.091.412.091.878.091h3.442m.225 1.657v6.01c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273H7.334c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V5.667c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093c.534-.272 1.234-.272 2.635-.272h2.676c.611 0 .917 0 1.205.07.255.06.499.161.723.298.252.155.468.371.9.804l2.657 2.656c.433.433.649.649.803.901.138.224.239.468.3.723.069.288.069.593.069 1.205z"
      ></path>
    </svg>
  );
};

export default File04OutlineIcon;
