import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const RadioButtonIcon = (props: IconPropsType) => {
  const {
    fill = colors['gray-500'],
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...rest}
      viewBox="0 0 18 18"
    >
      <circle cx={9} cy={9.001} r={6.525} stroke={stroke} strokeWidth={1.35} />
      <circle
        cx={9}
        cy={9.001}
        r={2.447}
        fill={fill}
        stroke={stroke}
        strokeWidth={0.506}
      />
    </svg>
  );
};

export default RadioButtonIcon;
