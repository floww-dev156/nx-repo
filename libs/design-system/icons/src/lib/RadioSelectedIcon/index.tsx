import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  dotColor?: string;
  bgColor?: string;
  borderColor?: string;
}

const RadioSelectedIcon = (props: IconProps) => (
  <svg
    {...props}
    width={props.width}
    height={props.height}
    viewBox={'0 0 16 16'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={0.5}
      y={0.5}
      width={15}
      height={15}
      rx={7.5}
      fill={props.bgColor}
    />
    <circle cx={8} cy={8} r={3} fill={props.dotColor} />
    <rect
      x={0.5}
      y={0.5}
      width={15}
      height={15}
      rx={7.5}
      stroke={props.borderColor}
    />
  </svg>
);

RadioSelectedIcon.defaultProps = {
  width: 16,
  height: 16,
  dotFill: colors['primary-600'],
  borderColor: colors['primary-600'],
  bgColor: colors['primary-50'],
};
export { RadioSelectedIcon };
