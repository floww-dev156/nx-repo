import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const PinIcon = (props: IconPropsType) => {
  const {
    width = 20,
    height = 20,
    stroke = colors['blue-gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12.5v5.833M6.668 6.09v1.775c0 .174 0 .26-.017.343a.833.833 0 0 1-.074.212c-.039.075-.093.143-.201.278l-1.308 1.636c-.555.693-.832 1.04-.833 1.332 0 .253.115.493.314.652.228.182.672.182 1.56.182h7.785c.888 0 1.332 0 1.56-.182a.833.833 0 0 0 .314-.652c0-.292-.278-.639-.833-1.332l-1.308-1.636a1.762 1.762 0 0 1-.2-.278.832.832 0 0 1-.075-.212c-.017-.083-.017-.17-.017-.343V6.09c0-.096 0-.144.005-.191a.835.835 0 0 1 .024-.125c.013-.046.03-.09.066-.18l.84-2.099c.245-.613.368-.919.317-1.165a.834.834 0 0 0-.356-.525c-.21-.138-.54-.138-1.199-.138H6.97c-.66 0-.99 0-1.2.138a.833.833 0 0 0-.355.525c-.05.246.072.552.317 1.165l.84 2.1c.035.089.053.133.066.18.01.04.019.082.024.124.005.047.005.095.005.19Z"
      />
    </svg>
  );
};

export default PinIcon;
