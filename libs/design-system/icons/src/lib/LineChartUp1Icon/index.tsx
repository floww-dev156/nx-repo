import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const LineChartUp1Icon = (props: IconPropsType) => {
  const { stroke = colors['primary-600'], ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M28 28H6.133c-.746 0-1.12 0-1.405-.145a1.334 1.334 0 0 1-.583-.583C4 26.987 4 26.613 4 25.867V4m22.667 6.667-5.226 5.577c-.197.21-.296.317-.416.371a.667.667 0 0 1-.337.058c-.13-.012-.26-.079-.516-.212l-4.344-2.255c-.257-.134-.385-.2-.516-.212a.667.667 0 0 0-.337.058c-.12.054-.218.16-.416.371L9.332 20"
      />
    </svg>
  );
};

export default LineChartUp1Icon;
