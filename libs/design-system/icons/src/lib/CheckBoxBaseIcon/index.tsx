import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const CheckBoxBaseIcon = (props: IconPropsType) => {
  const {
    fill = colors['base-white'],
    stroke = colors['gray-300'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <rect width={19} height={19} x={0.5} y={0.5} fill="#fff" rx={9.5} />
      <rect width={19} height={19} x={0.5} y={0.5} stroke={stroke} rx={9.5} />
    </svg>
  );
};

export { CheckBoxBaseIcon };
