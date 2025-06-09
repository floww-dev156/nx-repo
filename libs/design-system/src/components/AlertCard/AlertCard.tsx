import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import { ArrowNarrowIcon, XCloseIcon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../Theme/Provider';
import { AlertCardAction, AlertCardVariant } from '../../types';

import { Button, Hierarchy, SubVariant } from '../Button';

import { getAlertIconBasedOnVariant } from './utils';
import * as Styles from './styles';

export interface Props {
  variant: AlertCardVariant;
  title: string;

  description?: string;
  primaryAction?: AlertCardAction;
  secondaryAction?: AlertCardAction;
  onClose?: () => void;
  containerClassName?: string;
}

const AlertCard = (props: Props): React.ReactElement => {
  const {
    variant,
    title,
    description,
    onClose,
    primaryAction,
    secondaryAction,
    containerClassName,
  } = props;

  const { theme, colorScheme } = useThemeContext();
  const alertCardTheme = theme[colorScheme].alertCard;
  const coloredTheme = alertCardTheme[variant];

  const alertIcon = getAlertIconBasedOnVariant(
    variant,
    coloredTheme.alertIconColor
  );

  const isDefaultVariant = variant === 'DEFAULT';

  const areActionsPresent = Boolean(secondaryAction || primaryAction);

  const renderAlertIcon = (): React.ReactElement =>
    isDefaultVariant ? (
      <div
        className={cn(
          Styles.defaultAlertIconContainerStyles,
          coloredTheme.borderColor
        )}
      >
        {alertIcon}
      </div>
    ) : (
      alertIcon
    );

  const renderDetails = (): React.ReactElement => (
    <div className={cn(Styles.cardDetailsContainerStyles)}>
      <p className={cn(Styles.cardTitleStyles, coloredTheme.titleColor)}>
        {title}
      </p>
      {description ? (
        <p
          className={cn(
            Styles.cardDescriptionStyles,
            coloredTheme.descriptionColor
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );

  const renderRightIcon = (): React.ReactElement => (
    <ArrowNarrowIcon
      width={20}
      height={20}
      fill={coloredTheme.primaryActionIconColor}
    />
  );

  const renderActions = (): React.ReactElement => (
    <div className={Styles.cardActionContainerStyles}>
      {secondaryAction ? (
        <Button
          hierarchy={Hierarchy.Link}
          size={'Small'}
          subVariant={SubVariant.Gray}
          onClick={secondaryAction.onClick}
          className={cn(
            Styles.cardActionButtonStyles,
            coloredTheme.secondaryActionTextColor
          )}
        >
          {secondaryAction.text}
        </Button>
      ) : null}

      {primaryAction ? (
        <Button
          hierarchy={Hierarchy.Link}
          size={'Small'}
          subVariant={SubVariant.Gray}
          onClick={primaryAction.onClick}
          className={cn(
            Styles.cardActionButtonStyles,
            coloredTheme.primaryActionTextColor
          )}
          rightIcon={renderRightIcon}
        >
          {primaryAction.text}
        </Button>
      ) : null}
    </div>
  );

  const renderCloseButton = (): React.ReactElement => (
    <button onClick={onClose}>
      <XCloseIcon height={20} width={20} fill={coloredTheme.closeIconColor} />
    </button>
  );

  return (
    <div
      className={cn(
        Styles.containerStyles,
        coloredTheme.bgColor,
        coloredTheme.borderColor,
        containerClassName
      )}
    >
      {renderAlertIcon()}

      <div className={cn(Styles.cardContainerStyles)}>
        {renderDetails()}
        {areActionsPresent ? renderActions() : null}
      </div>

      {onClose ? renderCloseButton() : null}
    </div>
  );
};

export default observer(AlertCard);
