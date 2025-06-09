import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';

interface InfoFeaturedIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  innerBgColor?: string;
  outerBGColor?: string;
  className?: string;
}

const InfoFeaturedIcon = (props: InfoFeaturedIconProps): React.ReactElement => {
  const {
    fill = colors['primary-600'],
    innerBgColor = colors['primary-100'],
    outerBGColor = colors['primary-50'],
    width = 56,
    height = 56,
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      {...rest}
    >
      <rect x={4} y={4} width={48} height={48} rx={24} fill={innerBgColor} />
      <path
        d="M28 32v-4m0-4h.01M38 28c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={4}
        y={4}
        width={48}
        height={48}
        rx={24}
        stroke={outerBGColor}
        strokeWidth={8}
      />
    </svg>
  );
};

export { InfoFeaturedIcon };
