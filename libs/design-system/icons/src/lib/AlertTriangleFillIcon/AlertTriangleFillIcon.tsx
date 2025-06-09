import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const AlertTriangleFillIcon = (props: IconPropsType): React.ReactElement => {
  const {
    height = 20,
    fill = colors['warning-500'],
    width = 20,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 18 18"
      {...rest}
      fill="none"
      stroke={'none'}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.61 1.251a1.5 1.5 0 0 0-1.22 0c-.299.134-.493.368-.629.56a10 10 0 0 0-.432.705l-6.2 10.71c-.158.271-.301.518-.398.728-.099.213-.206.5-.172.826a1.5 1.5 0 0 0 .61 1.058c.266.194.567.245.801.266.23.021.516.021.83.021h12.4c.315 0 .6 0 .83-.021.234-.021.536-.072.802-.266a1.5 1.5 0 0 0 .61-1.057c.033-.327-.073-.614-.172-.827a10 10 0 0 0-.398-.729l-6.2-10.71c-.157-.27-.3-.517-.433-.705-.135-.19-.33-.425-.63-.559m.14 5.499a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM9 12a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default AlertTriangleFillIcon;
