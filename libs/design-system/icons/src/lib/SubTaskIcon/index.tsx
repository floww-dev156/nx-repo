import React from 'react';

import { colors } from '@nx-repo/shared-style-guide';

import { IconPropsType } from '../types';

export default class SvgComponent extends React.Component<IconPropsType> {
  static defaultProps = {
    height: 32,
    width: 32,
    fill: colors['blue-gray-700'],
  };
  render() {
    const { height, width, fill, ...otherProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 32 32"
        {...otherProps}
      >
        <path
          fill={fill}
          d="M7.276 14.424l1.14 9.714c.035.31.355.59.685.59h13.797c.328 0 .65-.283.686-.59l1.14-9.714c.025-.22-.105-.363-.35-.363H7.625c-.244 0-.375.145-.349.363zm-1.926.226c-.162-1.38.88-2.529 2.275-2.529h16.75c1.395 0 2.437 1.145 2.275 2.53l-1.14 9.713c-.15 1.29-1.305 2.303-2.612 2.303H9.102c-1.308 0-2.461-1.01-2.613-2.303L5.35 14.65zm3.862-3.983a.97.97 0 110-1.94h13.576a.968.968 0 01.969.97.97.97 0 01-.969.97H9.212zm2.424-3.394a.968.968 0 01-.969-.97.97.97 0 01.969-.97h8.727a.969.969 0 01.686 1.656.969.969 0 01-.686.284h-8.727z"
        />
      </svg>
    );
  }
}
