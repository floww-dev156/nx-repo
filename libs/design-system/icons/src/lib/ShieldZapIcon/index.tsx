import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const ShieldZapIcon = (props: IconPropsType): React.ReactElement => {
  const { height = 20, width = 20, fill = colors['violet-600'] } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.762.907c.158-.023.318-.023.476 0 .183.026.352.09.487.141l.036.014 4.577 1.716c.515.192.967.36 1.315.668a2.5 2.5 0 01.684.986c.165.434.164.917.163 1.466V10c0 2.355-1.281 4.319-2.666 5.762-1.394 1.452-2.989 2.478-3.832 2.97l-.035.02c-.154.09-.353.207-.618.264a1.772 1.772 0 01-.698 0c-.265-.056-.465-.174-.618-.264l-.035-.02c-.843-.492-2.438-1.518-3.832-2.97C3.78 14.319 2.5 12.355 2.5 10V5.898c0-.55-.002-1.032.163-1.466a2.5 2.5 0 01.684-.986c.348-.307.8-.476 1.315-.668L9.24 1.062l.036-.014a2.32 2.32 0 01.487-.141zm1.66 5.932a.833.833 0 00-1.178-1.179l-2.5 2.5a.833.833 0 00.217 1.335l2.299 1.15-1.683 1.682a.833.833 0 101.179 1.179l2.5-2.5a.833.833 0 00-.217-1.335L9.74 8.521l1.683-1.682z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { ShieldZapIcon };
