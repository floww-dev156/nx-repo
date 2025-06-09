import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

interface PropsType extends IconPropsType {
  FeaturedIconFullWidth?: number;
  FeaturedIconFullHeight?: number;
}

const FeaturedPlayCircleIcon = (props: PropsType): React.ReactElement => {
  const {
    fill = colors['success-600'],
    secondFill = colors['success-100'],
    stroke = colors['success-50'],
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
        d="M28 17C21.9249 17 17 21.9249 17 28C17 34.0751 21.9249 39 28 39C34.0751 39 39 34.0751 39 28C39 21.9249 34.0751 17 28 17ZM25.5997 24.1161C25.5 24.2493 25.5 24.488 25.5 24.9652V31.0346C25.5 31.5119 25.5 31.7505 25.5997 31.8837C25.6867 31.9998 25.8197 32.0725 25.9644 32.0828C26.1304 32.0947 26.3311 31.9656 26.7326 31.7075L31.4532 28.6728C31.8016 28.4489 31.9758 28.3369 32.0359 28.1945C32.0885 28.0701 32.0885 27.9297 32.0359 27.8053C31.9758 27.6629 31.8016 27.5509 31.4532 27.327L26.7326 24.2923C26.3311 24.0342 26.1304 23.9052 25.9644 23.917C25.8197 23.9273 25.6867 24 25.5997 24.1161Z"
        fill={fill}
      />
    </svg>
  );
};

export { FeaturedPlayCircleIcon };
