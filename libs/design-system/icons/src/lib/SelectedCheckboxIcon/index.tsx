import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';
import { IconPropsType } from '../types';

const SelectedCheckboxIcon = (props: IconPropsType): React.ReactElement => {
  const {
    width = 16,
    height = 16,
    fill = colors['primary-600'],
    stroke = colors['base-white'],
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width={width} height={height} rx="4" fill={fill} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3536 4.64645C12.5488 4.84171 12.5488 5.15829 12.3536 5.35355L6.85355 10.8536C6.65829 11.0488 6.34171 11.0488 6.14645 10.8536L3.64645 8.35355C3.45118 8.15829 3.45118 7.84171 3.64645 7.64645C3.84171 7.45118 4.15829 7.45118 4.35355 7.64645L6.5 9.79289L11.6464 4.64645C11.8417 4.45118 12.1583 4.45118 12.3536 4.64645Z"
        fill={stroke}
      />
    </svg>
  );
};

export default SelectedCheckboxIcon;
