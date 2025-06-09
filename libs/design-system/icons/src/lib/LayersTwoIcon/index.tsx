import * as React from 'react';
import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

function LayersTwoIcon(props: IconPropsType) {
  const {
    fill = colors['warning-600'],
    width = 20,
    height = 20,
    ...otherProps
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M11.723 3.576a1.5 1.5 0 01.554 0 1.902 1.902 0 01.528.2l9.642 4.82a1 1 0 010 1.79l-9.642 4.82a1.898 1.898 0 01-.528.2 1.5 1.5 0 01-.554 0 1.898 1.898 0 01-.528-.2l-9.642-4.82a1 1 0 010-1.79l9.642-4.82.026-.013c.093-.048.286-.147.502-.187z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill}
        d="M2.528 13.109l-.975.488a1 1 0 000 1.788l9.642 4.821.026.013c.093.048.286.147.502.187a1.5 1.5 0 00.554 0c.216-.04.41-.139.502-.187l.026-.013 9.642-4.82a1 1 0 000-1.79l-.975-.487-7.773 3.886-.011.006c-.05.025-.17.085-.29.137a3.489 3.489 0 01-2.043.234 3.489 3.489 0 01-.754-.233c-.12-.053-.24-.113-.289-.138l-.011-.006-7.773-3.886z"
      ></path>
    </svg>
  );
}

export default LayersTwoIcon;
