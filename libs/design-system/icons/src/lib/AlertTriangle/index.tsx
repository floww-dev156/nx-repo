import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlertTriangleIcon = (props: IconPropsType) => {
  const {
    width = 20,
    height = 20,
    stroke = colors['warning-600'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        d="M10 7.498v3.334m0 3.333h.008M8.846 3.24l-6.854 11.84c-.38.656-.57.984-.542 1.254a.833.833 0 0 0 .339.587c.219.16.598.16 1.357.16h13.708c.759 0 1.138 0 1.357-.16a.833.833 0 0 0 .339-.587c.028-.27-.162-.598-.542-1.255L11.154 3.241c-.379-.654-.568-.981-.816-1.091a.833.833 0 0 0-.677 0c-.247.11-.436.437-.815 1.091Z"
        stroke={stroke}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export { AlertTriangleIcon };
