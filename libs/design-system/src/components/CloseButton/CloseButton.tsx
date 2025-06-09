import cn from 'classnames';
import React, { forwardRef, ReactNode, useRef } from 'react';

import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { AriaButtonProps } from '@react-types/button';
import { XCloseIcon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../Theme/Provider';
import { ExtendedSize } from '../../types';

import { FocusRing } from '../FocusRing';

import { buttonSizes } from './sizes';
import { getButtonStyles, buttonClassName } from './styles';
import { ButtonStyles } from './types';
import { CloseButtonHierarchy, CloseButtonSubVariant } from '.';

export interface CloseButtonProps extends AriaButtonProps {
  size: Exclude<ExtendedSize, 'ExtraSmall' | 'ExtraLarge' | 'DoubleExtraLarge'>;
  subVariant: CloseButtonSubVariant;
  ref?: React.ForwardedRef<HTMLButtonElement>;
  id?: string;
  onClick?: (_: any) => void;
  className?: string;
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      id,
      onClick,
      size = 'Medium',
      className = '',
      children,
      subVariant = CloseButtonSubVariant.Gray,
      isDisabled = false,
      ...others
    }: CloseButtonProps,
    forwardedRef
  ): React.ReactElement => {
    const hierarchy = CloseButtonHierarchy.Tertiary;
    const _ref = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef || _ref;

    const { buttonProps, isPressed } = useButton(
      {
        id,
        onPress: onClick,
        ...others,
      },
      ref as React.RefObject<HTMLButtonElement>
    );
    const { hoverProps, isHovered } = useHover({ isDisabled: false });

    const { theme, colorScheme } = useThemeContext();
    const coloredTheme = theme[colorScheme];

    const sizedTheme = buttonSizes[size];

    const { bgColor, border, focusRingVariant, iconColor }: ButtonStyles =
      getButtonStyles(
        { isHovered, isPressed, hierarchy, subVariant },
        coloredTheme
      );

    const renderChildren = (): React.ReactElement => {
      return (
        <div className={cn('flex items-center')}>
          <XCloseIcon
            height={sizedTheme.iconSize.height}
            width={sizedTheme.iconSize.width}
            fill={iconColor}
          />
        </div>
      );
    };

    const renderCustomChildren = (): React.ReactElement => {
      return <div className={cn('flex items-center')}>{children}</div>;
    };

    return (
      <FocusRing within variant={focusRingVariant} size={size}>
        <button
          {...others}
          id={id}
          lens-role="button"
          ref={ref}
          {...mergeProps(hoverProps, buttonProps)}
          className={cn(
            {
              'cursor-not-allowed': isDisabled,
              relative: true,
            },
            buttonClassName,
            bgColor,
            border,
            sizedTheme.borderRadius,
            sizedTheme.padding,
            className
          )}
        >
          {children ? renderCustomChildren() : renderChildren()}
        </button>
      </FocusRing>
    );
  }
);
