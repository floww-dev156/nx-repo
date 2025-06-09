import { colors } from '@nx-repo/shared-style-guide';
import React, { ReactElement } from 'react';
import { IconPropsType } from '../types';

const Send02Icon = (props: IconPropsType): ReactElement => {
  const {
    height = 20,
    width = 20,
    fill = colors['primary-600'],
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill={fill}
        d="M17.996 1.215c-.33-.11-.637-.031-.79.013a7.205 7.205 0 00-.563.204L2.512 6.946c-.222.087-.438.171-.604.253-.144.071-.449.23-.62.557A1.25 1.25 0 001.29 8.91c.171.328.477.486.62.557.167.082.382.165.604.252l3.934 1.53c.293.114.44.17.586.174a.833.833 0 00.374-.079c.132-.061.243-.173.466-.396l4.038-4.037a.833.833 0 111.178 1.178l-4.038 4.038c-.222.223-.334.334-.396.466a.833.833 0 00-.078.374c.003.146.06.293.175.586l1.53 3.933c.086.223.17.438.251.605.071.143.229.449.557.62a1.25 1.25 0 001.154 0c.328-.17.486-.475.557-.619.082-.166.166-.382.253-.604l5.514-14.13c.078-.2.155-.398.204-.564.044-.153.124-.46.013-.79a1.25 1.25 0 00-.79-.79z"
      ></path>
    </svg>
  );
};

export { Send02Icon };
