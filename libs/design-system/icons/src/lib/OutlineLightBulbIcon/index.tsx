import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const OutlineLightBulbIcon = ({
  stroke = colors['blue-600'],
  width,
  height,
  ...rest
}: IconPropsType) => {
  if (width === 16 && height === 16) {
    return (
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M6.442 11.333h3.116M8 2v.667m4.243 1.09-.472.472M14 8h-.667M2.667 8H2m2.229-3.771-.472-.472m1.886 6.6a3.333 3.333 0 1 1 4.714 0l-.365.365a2.25 2.25 0 0 0-.659 1.59v.355a1.333 1.333 0 0 1-2.666 0v-.354a2.25 2.25 0 0 0-.66-1.591l-.364-.365Z"
          stroke="#334155"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 48 48"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.078"
        d="M19.327 34h9.346M24 6v2m12.728 3.272l-1.414 1.414M42 24h-2M8 24H6m6.686-11.314l-1.414-1.414m5.657 19.8c-3.905-3.906-3.905-10.238 0-14.143 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-1.094 1.094A6.75 6.75 0 0028 36.938V38a4 4 0 01-8 0v-1.062a6.75 6.75 0 00-1.977-4.773l-1.094-1.094z"
      ></path>
    </svg>
  );
};

export { OutlineLightBulbIcon };
