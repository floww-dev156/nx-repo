import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowCircleBrokenLeftDownIcon = (props: IconPropsType) => {
  const {
    height = 16,
    width = 16,
    fill = colors['warning-600'],
    secondFill = colors['base-white'],
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M9.554 2.204a6 6 0 1 0 4.242 4.242.667.667 0 1 1 1.288-.344A7.333 7.333 0 1 1 9.898.916a.667.667 0 0 1-.344 1.288Zm3.584.658c.26.26.26.683 0 .943L7.609 9.334H10a.667.667 0 1 1 0 1.333H6A.667.667 0 0 1 5.333 10V6a.667.667 0 1 1 1.334 0v2.39l5.528-5.528c.26-.26.683-.26.943 0Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={secondFill} d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ArrowCircleBrokenLeftDownIcon;
