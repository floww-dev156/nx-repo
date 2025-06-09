import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface SolidArrowDownIconProps {
  height?: number;
  width?: number;
  fill?: string;
}

const SolidArrowDownIcon = (props: SolidArrowDownIconProps) => {
  const { height = 16, width = 16, fill = colors['blue-gray-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M13.366 8.234a.8.8 0 010 1.132l-4.8 4.8a.8.8 0 01-1.132 0l-4.8-4.8a.8.8 0 111.132-1.132L7.2 11.67V2.4a.8.8 0 011.6 0v9.269l3.434-3.435a.8.8 0 011.132 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { SolidArrowDownIcon };
