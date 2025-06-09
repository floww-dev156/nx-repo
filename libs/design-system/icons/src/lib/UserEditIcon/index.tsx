import { colors } from '@nx-repo/shared-style-guide';
import React from 'react';
import { IconPropsType } from '../types';

function UserEditIcon(props: IconPropsType) {
  const { stroke = colors['primary-600'] } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 10.333H5c-.93 0-1.396 0-1.774.115a2.666 2.666 0 00-1.778 1.778c-.115.378-.115.844-.115 1.774m8.334-9a3 3 0 11-6 0 3 3 0 016 0zm-2.334 9l2.068-.59c.099-.029.148-.043.195-.064a.665.665 0 00.116-.069 1.4 1.4 0 00.15-.14l4.305-4.304A1.178 1.178 0 1012.5 7.167L8.195 11.47c-.072.073-.109.11-.139.15a.668.668 0 00-.068.117c-.021.046-.036.095-.064.194L7.334 14z"
      ></path>
    </svg>
  );
}

export { UserEditIcon };
