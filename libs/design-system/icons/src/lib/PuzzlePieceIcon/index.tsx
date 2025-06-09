import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

function PuzzlePieceIcon(iconProps: IconPropsType) {
  const {
    fill = colors['primary-600'],
    width = 24,
    height = 24,
    ...props
  } = iconProps;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.41 1.077a.833.833 0 011.18 0l2.182 2.183c.527-.82 1.202-1.337 1.97-1.533 1.055-.268 2.068.133 2.733.798s1.066 1.678.798 2.734c-.195.767-.713 1.442-1.533 1.969l2.183 2.183a.833.833 0 010 1.178l-3 3a.833.833 0 01-1.368-.292c-.44-1.154-.998-1.526-1.373-1.62-.39-.1-.82.036-1.145.36-.324.325-.46.755-.36 1.144.095.376.466.934 1.62 1.374a.833.833 0 01.292 1.368l-3 3a.833.833 0 01-1.178 0L7.228 16.74c-.527.82-1.202 1.338-1.97 1.533-1.055.268-2.068-.133-2.733-.798-.664-.665-1.065-1.678-.797-2.734.195-.767.712-1.442 1.533-1.969L1.078 10.59a.833.833 0 010-1.178l3-3a.833.833 0 011.368.292c.439 1.154.998 1.526 1.373 1.62.39.1.82-.036 1.144-.36.325-.325.46-.755.361-1.145-.095-.375-.467-.933-1.62-1.373a.833.833 0 01-.293-1.368l3-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default PuzzlePieceIcon;
