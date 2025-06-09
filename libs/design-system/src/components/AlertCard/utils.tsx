import React from 'react';
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoCircleIcon,
} from '@nx-repo/design-system-icons';

import { AlertCardVariant } from '../../types';

export const getAlertIconBasedOnVariant = (
  variant: AlertCardVariant,
  iconColor: string
): React.ReactElement => {
  const commonIconProps = { height: 20, width: 20 };

  switch (variant) {
    case 'DEFAULT':
    case 'GRAY':
    case 'PRIMARY':
    case 'ERROR':
      return <InfoCircleIcon {...commonIconProps} fill={iconColor} />;
    case 'WARNING':
      return <AlertTriangleIcon {...commonIconProps} stroke={iconColor} />;
    case 'SUCCESS':
      return <CheckCircleIcon {...commonIconProps} fill={iconColor} />;
  }
};
