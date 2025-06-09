import React from 'react';
import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const OutlineRowVerticalIcon = (props: IconPropsType) => {
  const {
    width = 16,
    height = 16,
    fill = colors['blue-gray-600'],
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M13.267 15.167H2.734c-1.28 0-1.9-.654-1.9-1.987v-2.693c0-1.34.62-1.987 1.9-1.987h10.533c1.28 0 1.9.653 1.9 1.987v2.693c0 1.333-.62 1.987-1.9 1.987ZM2.734 9.5c-.673 0-.9.14-.9.987v2.693c0 .847.227.987.9.987h10.533c.674 0 .9-.14.9-.987v-2.693c0-.847-.226-.987-.9-.987H2.734ZM13.267 7.5H2.734c-1.28 0-1.9-.653-1.9-1.987V2.82c0-1.34.62-1.987 1.9-1.987h10.533c1.28 0 1.9.654 1.9 1.987v2.693c0 1.334-.62 1.987-1.9 1.987ZM2.734 1.833c-.673 0-.9.14-.9.987v2.693c0 .847.227.987.9.987h10.533c.674 0 .9-.14.9-.987V2.82c0-.847-.226-.987-.9-.987H2.734Z"
        fill={fill}
      />
    </svg>
  );
};

export { OutlineRowVerticalIcon };
