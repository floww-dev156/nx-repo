import React from 'react';

import { RefreshCCW01Icon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../Theme/Provider';

import { Loader } from '../Loader/Loader';

import {
  errorViewClassName,
  getButtonStyles,
  getButtonTextStyles,
} from './styles';

import './index.css';

interface ErrorViewProps {
  onRetryClick: () => void;
  isLoading: boolean;
}
export const ErrorView = (props: ErrorViewProps): React.ReactElement => {
  const { onRetryClick, isLoading } = props;

  const { theme, colorScheme } = useThemeContext();
  const errorTheme = theme[colorScheme];

  const errorViewTheme = errorTheme.comboBox.errorView;

  const buttonTextStyles = getButtonTextStyles(errorViewTheme);

  const buttonStyles = getButtonStyles(errorViewTheme);

  //TODO: update retry text to i18n

  return (
    <div className={`${errorViewClassName} combobox-error-view-container`}>
      <button className={buttonStyles} onClick={onRetryClick}>
        {isLoading ? (
          <Loader fill={errorViewTheme.loaderColor} />
        ) : (
          <>
            <div className="cursor-pointer mr-8px">
              <RefreshCCW01Icon
                height={20}
                width={20}
                fill={errorViewTheme.retryIconColor}
              />
            </div>
            <div className={buttonTextStyles}>Retry</div>
          </>
        )}
      </button>
    </div>
  );
};
