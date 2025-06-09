import * as React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

const LaptopIcon = (props: IconPropsType): React.ReactElement => {
  const {
    width = 20,
    height = 20,
    stroke = colors['gray-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 13.332V5.999c0-.934 0-1.4-.182-1.757a1.667 1.667 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182H5.166c-.933 0-1.4 0-1.757.182-.313.16-.568.414-.728.728-.182.357-.182.823-.182 1.757v7.333m1.39 3.333H16.11c.517 0 .775 0 .987-.056a1.667 1.667 0 0 0 1.179-1.179c.057-.212.057-.47.057-.987 0-.258 0-.387-.029-.493a.834.834 0 0 0-.589-.59c-.106-.028-.235-.028-.493-.028H2.777c-.258 0-.387 0-.493.028a.833.833 0 0 0-.59.59c-.028.106-.028.235-.028.493 0 .517 0 .775.057.987A1.667 1.667 0 0 0 2.9 16.61c.212.056.47.056.987.056Z"
      />
    </svg>
  );
};
export { LaptopIcon };
