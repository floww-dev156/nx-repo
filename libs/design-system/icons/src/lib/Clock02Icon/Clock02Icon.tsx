import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const Clock02Icon = (props: IconPropsType): ReactElement => {
  const {
    width = 16,
    height = 16,
    fill = colors['cyan-500'],
    secondFill,
    stroke,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <g clip-path="url(#clip0_3212_7100)">
        <path
          opacity="0.12"
          d="M8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
          fill={fill}
        />
        <path
          d="M8.00016 3.99967V7.99967L10.6668 9.33301M14.6668 7.99967C14.6668 11.6816 11.6821 14.6663 8.00016 14.6663C4.31826 14.6663 1.3335 11.6816 1.3335 7.99967C1.3335 4.31778 4.31826 1.33301 8.00016 1.33301C11.6821 1.33301 14.6668 4.31778 14.6668 7.99967Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3212_7100">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default observer(Clock02Icon);
