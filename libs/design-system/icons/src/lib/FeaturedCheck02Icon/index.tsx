import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const FeaturedCheck02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 48,
    width = 48,
    fill = colors['success-50'],
    secondFill = colors['success-100'],
    stroke = colors['success-600'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill={secondFill} />
      <rect
        x="4"
        y="4"
        width="48"
        height="48"
        rx="24"
        stroke={fill}
        stroke-width="8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.7071 21.2929C37.0976 21.6834 37.0976 22.3166 36.7071 22.7071L25.7071 33.7071C25.3166 34.0976 24.6834 34.0976 24.2929 33.7071L19.2929 28.7071C18.9024 28.3166 18.9024 27.6834 19.2929 27.2929C19.6834 26.9024 20.3166 26.9024 20.7071 27.2929L25 31.5858L35.2929 21.2929C35.6834 20.9024 36.3166 20.9024 36.7071 21.2929Z"
        fill={stroke}
      />
    </svg>
  );
};

export default FeaturedCheck02Icon;
