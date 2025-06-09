import * as React from 'react';

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

function CalendarViewIcon(props: Props): JSX.Element {
  const { width = 24, height = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={getIconColor(props.isSelected)}
        fillRule="evenodd"
        d="M6 3a1 1 0 012 0v1h8V3a1 1 0 012 0v1h1a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h1V3z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path
        fill={getIconColor(props.isSelected)}
        fillRule="evenodd"
        d="M10 12a1 1 0 000 2h7a1 1 0 000-2h-7zm-3 4a1 1 0 000 2h6a1 1 0 000-2H7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default CalendarViewIcon;

CalendarViewIcon.defaultProps = {
  height: '24',
  width: '24',
  isSelected: false,
};
