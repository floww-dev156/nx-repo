import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const PenTool02Icon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    width = 20,
    stroke = colors['base-white'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 20 20"
      {...rest}
      fill="none"
      stroke={'none'}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.833 5L5.418 6.083c-.302.06-.454.09-.577.164a.833.833 0 00-.27.26c-.079.12-.115.27-.187.57L1.667 18.333m0 0l11.255-2.717c.3-.072.45-.108.57-.187a.833.833 0 00.26-.27c.074-.124.104-.275.165-.577L15 9.167M1.667 18.333l6.321-6.321m9.402-5.455L13.444 2.61c-.33-.33-.495-.495-.685-.556a.834.834 0 00-.516 0c-.19.061-.355.226-.685.556l-.614.615c-.33.33-.495.495-.557.685a.833.833 0 000 .515c.062.19.227.355.557.685l3.947 3.948c.33.33.495.495.686.557a.833.833 0 00.515 0c.19-.062.355-.227.685-.557l.614-.614c.33-.33.495-.495.557-.686a.833.833 0 000-.515c-.061-.19-.226-.355-.556-.685zm-8.223 2.61a1.667 1.667 0 110 3.333 1.667 1.667 0 010-3.333z"
      ></path>
    </svg>
  );
};

export default PenTool02Icon;
