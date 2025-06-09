import { colors } from '@nx-repo/shared-style-guide';
import * as React from 'react';

interface AlertTriangleFeaturedIconProps {
  width?: number | string;
  height?: number | string;
  outerBgColor?: string;
  innerBgColor?: string;
  fill?: string;
}

const AlertTriangleFeaturedIcon = (props: AlertTriangleFeaturedIconProps) => {
  const {
    fill = colors['warning-600'],
    outerBgColor = colors['warning-50'],
    innerBgColor = colors['warning-100'],
    ...rest
  } = props;

  return (
    <svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 56 56"
    >
      <rect x={4} y={4} width={48} height={48} rx={24} fill={innerBgColor} />
      <path
        d="M28 25v4m0 4h.01m-1.395-13.108L18.39 34.098c-.456.788-.684 1.182-.65 1.506a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.365 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.324-.194-.718-.65-1.506l-8.226-14.206c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.524-.978 1.31Z"
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

export { AlertTriangleFeaturedIcon };
