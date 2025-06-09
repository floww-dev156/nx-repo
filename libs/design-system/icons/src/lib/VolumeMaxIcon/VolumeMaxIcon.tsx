import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const VolumeMaxIcon = (props: IconPropsType) => {
  const { stroke = colors['gray-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.457 4.167A9.955 9.955 0 0 1 18.333 10a9.954 9.954 0 0 1-1.876 5.833M13.12 6.667A5.807 5.807 0 0 1 14.167 10c0 1.24-.387 2.389-1.046 3.333M8.03 3.638 5.39 6.276c-.145.144-.217.216-.3.268a.833.833 0 0 1-.242.1c-.095.023-.197.023-.401.023H3c-.467 0-.7 0-.878.09a.833.833 0 0 0-.364.365c-.091.178-.091.411-.091.878v4c0 .467 0 .7.09.878.08.157.208.285.365.365.178.09.411.09.878.09h1.448c.204 0 .306 0 .401.024.085.02.167.054.241.1.084.05.156.123.3.267l2.639 2.638c.357.357.535.536.688.548a.417.417 0 0 0 .35-.145c.1-.117.1-.37.1-.874V4.11c0-.505 0-.758-.1-.875a.417.417 0 0 0-.35-.144c-.153.012-.331.19-.688.547Z"
      />
    </svg>
  );
};

export { VolumeMaxIcon };
