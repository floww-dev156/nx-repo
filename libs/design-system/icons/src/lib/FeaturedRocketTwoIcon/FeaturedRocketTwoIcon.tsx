import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

interface FeaturedRocketTwoIconProps extends IconPropsType {
  innerBgColor?: string;
  outerBgColor?: string;
}

const FeaturedRocketTwoIcon = (
  props: FeaturedRocketTwoIconProps
): React.ReactElement => {
  const {
    height = 36,
    width = 36,
    innerBgColor = colors['warning-100'],
    fill = colors['warning-600'],
    outerBgColor = colors['warning-50'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 36 36"
      {...rest}
    >
      <rect
        width="32"
        height="32"
        x="2"
        y="2"
        fill={innerBgColor}
        rx="16"
      ></rect>
      <g clipPath="url(#clip0_477_86509)">
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 20l-2-2m2 2c.931-.354 1.825-.801 2.667-1.334M18 20v3.333s2.02-.366 2.667-1.333c.72-1.08 0-3.334 0-3.334M16 18c.355-.92.802-1.803 1.333-2.633a8.587 8.587 0 017.334-4.034c0 1.813-.52 5-4 7.333M16 18h-3.333s.366-2.02 1.333-2.667c1.08-.72 3.333 0 3.333 0M13 21c-1 .84-1.333 3.333-1.333 3.333S14.16 24 15 23c.473-.56.467-1.42-.06-1.94A1.454 1.454 0 0013 21z"
        ></path>
      </g>
      <rect
        width="32"
        height="32"
        x="2"
        y="2"
        stroke={outerBgColor}
        strokeWidth="4"
        rx="16"
      ></rect>
      <defs>
        <clipPath id="clip0_477_86509">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(10 10)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { FeaturedRocketTwoIcon };
