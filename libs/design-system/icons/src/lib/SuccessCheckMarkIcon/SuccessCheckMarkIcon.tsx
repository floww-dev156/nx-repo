import React, { Component } from 'react';

import { colors } from '@nx-repo/shared-style-guide';

interface Props {
  width?: number;
  height?: number;
}

class SuccessCheckMarkIcon extends Component<Props> {
  static defaultProps = {
    width: 16,
    height: 16,
  };

  render() {
    const { width, height } = this.props;

    return (
      <svg width={width} height={height} fill="none" viewBox="0 0 16 16">
        <path
          fill={colors['green-500']}
          fillRule="evenodd"
          d="M10.864 6.404l-3.045 4a.669.669 0 01-.526.263h-.005a.67.67 0 01-.525-.256L5.142 8.34a.667.667 0 111.05-.822L7.281 8.91l2.522-3.313a.667.667 0 011.061.808zm-2.863-5.07A6.666 6.666 0 108 14.667 6.666 6.666 0 008 1.334z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

export { SuccessCheckMarkIcon };
