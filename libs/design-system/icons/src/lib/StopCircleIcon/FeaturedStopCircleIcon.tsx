import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

interface PropsType extends IconPropsType {
  FeaturedIconFullWidth?: number;
  FeaturedIconFullHeight?: number;
}

const FeaturedStopCircleIcon = (props: PropsType): React.ReactElement => {
  const {
    fill = colors['gray-600'],
    secondFill = colors['gray-100'],
    stroke = colors['gray-50'],
    FeaturedIconFullWidth = 56,
    FeaturedIconFullHeight = 56,
    width = 48,
    height = 48,
    ...rest
  } = props;
  return (
    <svg
      width={FeaturedIconFullWidth}
      height={FeaturedIconFullHeight}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x={4}
        y={4}
        width={width}
        height={height}
        rx={24}
        fill={secondFill}
      />
      <rect
        x={4}
        y={4}
        width={width}
        height={height}
        rx={24}
        stroke={stroke}
        strokeWidth={8}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 17C21.9249 17 17 21.9249 17 28C17 34.0751 21.9249 39 28 39C34.0751 39 39 34.0751 39 28C39 21.9249 34.0751 17 28 17ZM24.109 24.546C24 24.7599 24 25.0399 24 25.6V30.4C24 30.9601 24 31.2401 24.109 31.454C24.2049 31.6422 24.3578 31.7951 24.546 31.891C24.7599 32 25.0399 32 25.6 32H30.4C30.9601 32 31.2401 32 31.454 31.891C31.6422 31.7951 31.7951 31.6422 31.891 31.454C32 31.2401 32 30.9601 32 30.4V25.6C32 25.0399 32 24.7599 31.891 24.546C31.7951 24.3578 31.6422 24.2049 31.454 24.109C31.2401 24 30.9601 24 30.4 24H25.6C25.0399 24 24.7599 24 24.546 24.109C24.3578 24.2049 24.2049 24.3578 24.109 24.546Z"
        fill={fill}
      />
    </svg>
  );
};

export { FeaturedStopCircleIcon };
