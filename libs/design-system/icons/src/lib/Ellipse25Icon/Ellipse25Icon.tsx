import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Ellipse25Icon = (props: IconPropsType) => {
  const { fill = colors['green-light-400'], ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...rest}>
      <g filter="url(#a)">
        <circle cx={12} cy={10.5} r={8} fill="#ffffff" />
      </g>
      <g filter="url(#b)">
        <circle cx={12} cy={10.5} r={6} fill={fill} />
      </g>
      <defs>
        <filter
          id="a"
          width={20}
          height={20}
          x={0}
          y={0.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.196487 0 0 0 0 0.196487 0 0 0 0 0.279476 0 0 0 0.06 0" />
          <feBlend
            in2="BackgroundImageFix"
            mode="multiply"
            result="effect1_dropShadow_3448_244284"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.196487 0 0 0 0 0.196487 0 0 0 0 0.279476 0 0 0 0.06 0" />
          <feBlend
            in2="effect1_dropShadow_3448_244284"
            mode="multiply"
            result="effect2_dropShadow_3448_244284"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_3448_244284"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width={20}
          height={20}
          x={2}
          y={2.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.196487 0 0 0 0 0.196487 0 0 0 0 0.279476 0 0 0 0.06 0" />
          <feBlend
            in2="BackgroundImageFix"
            mode="multiply"
            result="effect1_dropShadow_3448_244284"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.196487 0 0 0 0 0.196487 0 0 0 0 0.279476 0 0 0 0.06 0" />
          <feBlend
            in2="effect1_dropShadow_3448_244284"
            mode="multiply"
            result="effect2_dropShadow_3448_244284"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_3448_244284"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export { Ellipse25Icon };
