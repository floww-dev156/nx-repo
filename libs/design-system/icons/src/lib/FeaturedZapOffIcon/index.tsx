import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface FeaturedZapOffIconPropTypes {
  width?: number | string;
  height?: number | string;
  fill?: string;
  outerBgColor?: string;
  innerBgColor?: string;
}

const FeaturedZapOffIcon = (props: FeaturedZapOffIconPropTypes) => {
  const {
    fill = colors['warning-600'],
    width = 56,
    height = 56,
    outerBgColor = colors['warning-50'],
    innerBgColor = colors['warning-100'],
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
        d="m24 24-3.907 4.688c-.348.418-.523.628-.525.805a.5.5 0 0 0 .185.396c.138.111.41.111.955.111H28l-1 8 5-6m-.35-6h3.642c.545 0 .817 0 .955.111a.5.5 0 0 1 .185.396c-.002.177-.177.387-.526.805L34.55 28.94m-7.977-8.027L29 18l-.6 4.798M37 37 19 19"
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
        stroke={outerBgColor}
        strokeWidth={8}
      />
    </svg>
  );
};

export { FeaturedZapOffIcon };
