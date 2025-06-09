import * as React from 'react';

import { IconPropsType } from '../types';

import { colors } from '@nx-repo/shared-style-guide';

const ClockStopWatchCallLogIcon = (
  props: IconPropsType
): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['gray-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#a)">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.184 7.409-.047 2.666 1.65 1.029m-1.55-6.695a5.667 5.667 0 1 0-.198 11.332 5.667 5.667 0 0 0 .197-11.332Zm0 0 .034-2m-1.333-.023 2.666.047M13.781 4.9 12.8 3.883l.491.509m-10.612.315 1.017-.983-.509.492"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="m.297.938 15.997.279-.279 15.997-15.997-.279z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { ClockStopWatchCallLogIcon };
