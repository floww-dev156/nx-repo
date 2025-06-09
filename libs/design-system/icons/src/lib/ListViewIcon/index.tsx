import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  height: string;
  width: string;
  isSelected: boolean;
}

function getIconColor(isSelected: boolean): string {
  if (isSelected) {
    return colors['blue-500'];
  }
  return colors['blue-gray-900'];
}

export default function ListViewIcon(props: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="16"
        height="6"
        x="4"
        y="5"
        fill={getIconColor(props.isSelected)}
        opacity="0.3"
        rx="1.5"
      ></rect>
      <rect
        width="16"
        height="6"
        x="4"
        y="13"
        fill={getIconColor(props.isSelected)}
        rx="1.5"
      ></rect>
    </svg>
  );
}

ListViewIcon.defaultProps = {
  height: '24',
  width: '24',
  isSelected: false,
};
