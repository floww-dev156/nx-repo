import React, { ForwardedRef, RefObject, useState } from 'react';
import cn from 'classnames';
import { PressResponder, useHover } from '@react-aria/interactions';

import { SearchSmIcon } from '@nx-repo/design-system-icons';

import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { XIcon } from '../../icons/XIcon';
import { useThemeContext } from '../../Theme/Provider';

import './Combobox.css';
import { FieldButton } from './FieldButton';
import { FocusRingWithBorder } from '../FocusRing';
import { TextFieldBase } from './TextFieldBase';
import { ComboBoxInputProps } from './types';
import {
  comboBoxFieldContainerClassName,
  fieldButtonContainerClassName,
  getCloseIconContainerClassName,
  getInputPrefixClassName,
  getStylesBasedOnSize,
  inputContainerClassName,
  inputFieldClassName,
  inputGroupContainerClassName,
  comboboxDisableStyles,
} from './styles';

const ComboBoxInput = React.forwardRef(function ComboBoxInput(
  props: ComboBoxInputProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  let {
    isQuiet,
    isDisabled,
    validationState,
    inputProps,
    inputRef,
    triggerProps,
    triggerRef,
    autoFocus,
    state,
    className,
    errorMessage,
    enableCustomTrigger,
    inputClassName,
    loadingState,
    isOpen,
    closeIconContainerClassName,
    inputPrefixEnhancerContainerClassName,
    menuTrigger,
    shouldRenderClearIcon,
    showToolTip,
  } = props;
  let { hoverProps, isHovered } = useHover({});

  const { theme, colorScheme } = useThemeContext();
  const colorTheme = theme[colorScheme];

  let [showLoading, setShowLoading] = useState(false);

  const hasSelectedItems = shouldRenderClearIcon && Boolean(state.selectedKey);

  const clearInput = () => {
    props.onInputChange && props.onInputChange('');
    props.onSelectionChange && props.onSelectionChange('');
    triggerRef?.current?.focus();
  };

  const getInputPrefixDimensionsBasedOnSize = (): number => {
    switch (props.size) {
      case 'ExtraSmall':
        return 18;
      case 'Small':
        return 20;
      case 'Medium':
        return 20;
      default:
        throw new Error('Invalid Size');
    }
  };

  const isError = Boolean(errorMessage);

  const prefixEnhancerClass = getInputPrefixClassName(
    Boolean(props.prefixEnhancer)
  );

  return (
    <FocusRingWithBorder
      within
      isTextInput
      autoFocus={autoFocus}
      isError={isError}
      size={props.size}
      focusClass={
        isError
          ? colorTheme.comboBox.border.error
          : colorTheme.comboBox.border.focus
      }
    >
      <div
        {...hoverProps}
        ref={ref as RefObject<HTMLDivElement>}
        className={cn(
          colorTheme.comboBox.bgColor,
          colorTheme.comboBox.textColor,
          {
            [`${colorTheme.comboBox.disabled.styles}  ${comboboxDisableStyles}`]:
              isDisabled,

            'input-container-hover-styles': isHovered,
          },
          {
            [colorTheme.comboBox.border.default]: !isError,
          },
          comboBoxFieldContainerClassName,
          className
        )}
      >
        <div className={cn(inputGroupContainerClassName)}>
          <div
            className={cn(
              prefixEnhancerClass,
              inputPrefixEnhancerContainerClassName
            )}
          >
            {props.prefixEnhancer ? (
              props.prefixEnhancer()
            ) : (
              <SearchSmIcon
                height={getInputPrefixDimensionsBasedOnSize()}
                width={getInputPrefixDimensionsBasedOnSize()}
              />
            )}
          </div>
          <div className={cn(inputContainerClassName)}>
            <TextFieldBase
              inputProps={inputProps}
              inputRef={inputRef}
              inputClassName={cn(
                `input-field-styles ${getStylesBasedOnSize(
                  props.size
                )}  ${inputFieldClassName}`,
                inputClassName,
                {
                  [`${colorTheme.comboBox.disabled.styles}  ${comboboxDisableStyles}`]:
                    isDisabled,
                }
              )}
              isDisabled={isDisabled}
              isQuiet={isQuiet}
              validationState={validationState}
              isLoading={
                showLoading &&
                (isOpen ||
                  menuTrigger === 'manual' ||
                  loadingState === 'loading')
              }
              showToolTip={showToolTip}
              disableFocusRing
            />
          </div>

          {isDisabled ? null : hasSelectedItems ? (
            <div
              className={cn(
                getCloseIconContainerClassName(enableCustomTrigger),
                closeIconContainerClassName
              )}
            >
              <button onClick={clearInput}>
                <XIcon />
              </button>
            </div>
          ) : null}
        </div>
        {enableCustomTrigger ? null : (
          <PressResponder preventFocusOnPress isPressed={isOpen}>
            <div className={cn(fieldButtonContainerClassName)}>
              <FieldButton
                {...triggerProps}
                ref={triggerRef}
                isQuiet={isQuiet}
                validationState={validationState}
                isDisabled={isDisabled}
              >
                {state.isOpen ? (
                  <ChevronDownIcon
                    stroke={colorTheme.comboBox.icon.stroke}
                    style={{
                      transform: 'rotate(180deg)',
                      transition: 'transform 0.5s',
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <ChevronDownIcon
                    stroke={colorTheme.comboBox.icon.stroke}
                    style={{
                      transition: 'transform 0.5s',
                      flexShrink: 0,
                    }}
                  />
                )}
              </FieldButton>
            </div>
          </PressResponder>
        )}
      </div>
    </FocusRingWithBorder>
  );
});

export default ComboBoxInput;
