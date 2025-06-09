import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const Calender02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    stroke = colors['cyan-600'],
    fill = colors['cyan-500'],
    width = 16,
    height = 16,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      {...rest}
    >
      <g clip-path="url(#clip0_22658_8140)">
        <path
          opacity="0.12"
          d="M2.56641 7.5668C2.56641 6.30668 2.56641 5.67662 2.81164 5.19532C3.02736 4.77195 3.37156 4.42775 3.79493 4.21203C4.27623 3.9668 4.90629 3.9668 6.16641 3.9668H12.4664C13.7265 3.9668 14.3566 3.9668 14.8379 4.21203C15.2612 4.42775 15.6055 4.77195 15.8212 5.19532C16.0664 5.67662 16.0664 6.30668 16.0664 7.5668V8.4668H2.56641V7.5668Z"
          fill={fill}
        />
        <path
          d="M16.0664 8.4668H2.56641M12.3164 2.4668V5.4668M6.31641 2.4668V5.4668M6.16641 17.4668H12.4664C13.7265 17.4668 14.3566 17.4668 14.8379 17.2216C15.2612 17.0058 15.6055 16.6616 15.8212 16.2383C16.0664 15.757 16.0664 15.1269 16.0664 13.8668V7.5668C16.0664 6.30668 16.0664 5.67662 15.8212 5.19532C15.6055 4.77195 15.2612 4.42775 14.8379 4.21203C14.3566 3.9668 13.7265 3.9668 12.4664 3.9668H6.16641C4.90629 3.9668 4.27623 3.9668 3.79493 4.21203C3.37156 4.42775 3.02736 4.77195 2.81164 5.19532C2.56641 5.67662 2.56641 6.30668 2.56641 7.5668V13.8668C2.56641 15.1269 2.56641 15.757 2.81164 16.2383C3.02736 16.6616 3.37156 17.0058 3.79493 17.2216C4.27623 17.4668 4.90629 17.4668 6.16641 17.4668Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_22658_8140">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.316406 0.966797)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Calender02Icon;
