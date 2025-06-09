import React from 'react';
import { observer } from 'mobx-react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

// TODO: update this component
function AlignLeftIcon(props: IconPropsType) {
  const {
    height = 18,
    width = 18,
    stroke = colors['gray-500'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 7.5H2.25M15 4.5H2.25m12.75 6H2.25m9.75 3H2.25"
      ></path>
    </svg>
  );
}

export default observer(AlignLeftIcon);
