import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ArrowCircleBrokenRightFeatheredIcon = (
  props: IconPropsType
): React.ReactElement => {
  const {
    height = 46,
    width = 46,
    stroke = colors['primary-600'],
    secondFill = colors['primary-50'],
    fill = colors['primary-100'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      {...rest}
    >
      <rect x="3" y="3" width="40" height="40" rx="20" fill={fill} />
      <rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke={secondFill}
        stroke-width="6"
      />
      <g clip-path="url(#clip0_4088_40000)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.0002 15.4997C20.2252 15.4997 17.8011 17.0064 16.5031 19.2503C16.2726 19.6487 15.7629 19.7848 15.3645 19.5543C14.9661 19.3239 14.8299 18.8141 15.0604 18.4157C16.6441 15.678 19.6062 13.833 23.0002 13.833C28.0628 13.833 32.1669 17.9371 32.1669 22.9997C32.1669 28.0623 28.0628 32.1663 23.0002 32.1663C19.6062 32.1663 16.6441 30.3214 15.0604 27.5836C14.8299 27.1852 14.9661 26.6755 15.3645 26.445C15.7629 26.2145 16.2726 26.3507 16.5031 26.7491C17.8011 28.993 20.2252 30.4997 23.0002 30.4997C27.1424 30.4997 30.5002 27.1418 30.5002 22.9997C30.5002 18.8575 27.1424 15.4997 23.0002 15.4997ZM22.4109 19.0771C22.7363 18.7516 23.264 18.7516 23.5894 19.0771L26.9228 22.4104C27.079 22.5667 27.1668 22.7787 27.1668 22.9997C27.1668 23.2207 27.079 23.4326 26.9228 23.5889L23.5894 26.9223C23.264 27.2477 22.7363 27.2477 22.4109 26.9223C22.0855 26.5968 22.0855 26.0692 22.4109 25.7438L24.3217 23.833H14.6668C14.2066 23.833 13.8335 23.4599 13.8335 22.9997C13.8335 22.5394 14.2066 22.1663 14.6668 22.1663H24.3217L22.4109 20.2556C22.0855 19.9302 22.0855 19.4025 22.4109 19.0771Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_4088_40000">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(13 13)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { ArrowCircleBrokenRightFeatheredIcon };
