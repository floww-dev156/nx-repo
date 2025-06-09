import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FileIcon = (props: IconPropsType) => {
  const { stroke = colors['blue-gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 1.702V4.8c0 .42 0 .63.082.79a.75.75 0 0 0 .327.328C11.07 6 11.28 6 11.7 6h3.098M10.5 12.75H6m6-3H6m9-2.259V12.9c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245H6.6c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.983C3 14.79 3 14.16 3 12.9V5.1c0-1.26 0-1.89.245-2.371a2.25 2.25 0 0 1 .984-.984C4.709 1.5 5.339 1.5 6.6 1.5h2.409c.55 0 .825 0 1.084.062.23.055.45.146.65.27.228.139.422.333.811.722l2.392 2.392c.389.389.583.583.722.81.124.202.215.421.27.65.062.26.062.535.062 1.085Z"
      />
    </svg>
  );
};

export { FileIcon };
