import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const VideoRecorderOutlineIcon = (props: IconPropsType): React.ReactElement => {
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
        d="M18.333 7.443c0-.505 0-.757-.1-.874a.417.417 0 00-.35-.145c-.152.012-.33.19-.688.548L14.166 10l3.03 3.029c.356.357.535.535.688.547a.417.417 0 00.35-.144c.1-.117.1-.37.1-.875V7.443zM1.667 8.167c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093c.534-.272 1.234-.272 2.635-.272h4.5c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093c.272.535.272 1.235.272 2.635v3.667c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.636.273h-4.5c-1.4 0-2.1 0-2.634-.273a2.5 2.5 0 01-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V8.167z"
      ></path>
    </svg>
  );
};

export default VideoRecorderOutlineIcon;
