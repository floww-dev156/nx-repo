import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AttachmentIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 24, width = 24, fill = colors['gray-600'] } = props;

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.294 21c-1.656 0-3.23-.666-4.432-1.875-2.388-2.403-2.486-6.213-.22-8.494l7.386-7.43A4.086 4.086 0 0114.95 2a4.48 4.48 0 013.192 1.349c1.721 1.731 1.788 4.482.146 6.132l-7.395 7.429a2.533 2.533 0 01-1.815.748 2.738 2.738 0 01-1.95-.821c-1.053-1.061-1.086-2.752-.073-3.772L13.88 6.21a.999.999 0 111.417 1.41l-6.824 6.856c-.24.242-.207.669.074.951a.76.76 0 00.53.231c.11 0 .269-.027.399-.158l7.394-7.429c.867-.873.802-2.358-.146-3.312-.906-.912-2.446-.984-3.277-.148l-7.386 7.43c-1.494 1.503-1.396 4.049.22 5.674C7.104 18.544 8.174 19 9.294 19c1 0 1.928-.378 2.61-1.064l7.387-7.43a1.001 1.001 0 011.418 1.41l-7.386 7.43A5.64 5.64 0 019.293 21z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export { AttachmentIcon };
