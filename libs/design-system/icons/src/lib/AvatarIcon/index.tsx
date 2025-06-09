import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AvatarIcon = (props: IconPropsType) => {
  const { stroke = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      {...rest}
    >
      <g filter="url(#a)">
        <rect width={40} height={40} fill="#000" fillOpacity={0.1} rx={20} />
        <path
          fill="#475467"
          d="M20 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
          opacity={0.12}
        />
        <path
          stroke="#475467"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 28c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4m-4.5-12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={120}
          height={120}
          x={-40}
          y={-40}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={20} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_3884_89664"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_3884_89664"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { AvatarIcon };
