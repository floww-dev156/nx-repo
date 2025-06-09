import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}

const FeaturedMergeIcon = (props: Props) => {
  const {
    fill = colors['primary-600'],
    outerBgColor = colors['primary-50'],
    innerBgColor = colors['primary-100'],
    ...rest
  } = props;

  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x={3} y={3} width={40} height={40} rx={20} fill={innerBgColor} />
      <rect
        x={3}
        y={3}
        width={40}
        height={40}
        rx={20}
        stroke={outerBgColor}
        strokeWidth={6}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8719 21.2182C20.2899 20.8348 21.3332 19.5393 21.3332 18.0001C21.3332 16.1591 19.8408 14.6667 17.9998 14.6667C16.1589 14.6667 14.6665 16.1591 14.6665 18.0001C14.6665 19.5533 15.7288 20.8584 17.1665 21.2284V30.5001C17.1665 30.9603 17.5396 31.3334 17.9998 31.3334C18.4601 31.3334 18.8332 30.9603 18.8332 30.5001V25.5001C19.0684 25.8138 19.3268 26.1122 19.6073 26.3926C20.9955 27.7809 22.8232 28.6287 24.7633 28.8008C25.1219 30.255 26.4349 31.3334 27.9998 31.3334C29.8408 31.3334 31.3332 29.841 31.3332 28.0001C31.3332 26.1591 29.8408 24.6667 27.9998 24.6667C26.4606 24.6667 25.1651 25.71 24.7817 27.128C23.2777 26.9651 21.8656 26.2939 20.7858 25.2141C19.706 24.1343 19.0348 22.7222 18.8719 21.2182Z"
        fill={fill}
      />
    </svg>
  );
};

export { FeaturedMergeIcon };
