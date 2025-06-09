import React from 'react';
import cn from 'classnames';
import { useHover } from '@react-aria/interactions';

import { SearchSmIcon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../Theme/Provider';
import { FocusRingWithBorder } from '../FocusRing';
import { TextFieldBase } from './TextFieldBase';
import { TrayComboBoxSearchInputProps } from './types';
import {
  comboBoxFieldContainerClassName,
  getInputPrefixClassName,
  getStylesBasedOnSize,
  inputContainerClassName,
  inputFieldClassName,
  inputGroupContainerClassName,
} from './styles';
import './Combobox.css';

const TrayComboBoxSearchInput = (props: TrayComboBoxSearchInputProps) => {
  const {
    isDisabled,
    validationState,
    autoFocus,
    inputProps,
    className,
    inputClassName,
    inputPrefixEnhancerContainerClassName,
  } = props;

  const { hoverProps, isHovered } = useHover({});
  const { theme, colorScheme } = useThemeContext();

  const colorTheme = theme[colorScheme];

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

  const prefixEnhancerClass = getInputPrefixClassName(
    Boolean(props.prefixEnhancer)
  );

  return (
    <FocusRingWithBorder
      within
      isTextInput
      autoFocus={autoFocus}
      size={props.size}
      focusClass={colorTheme.comboBox.border.focus}
    >
      <div
        {...hoverProps}
        className={cn(
          colorTheme.comboBox.bgColor,
          colorTheme.comboBox.textColor,
          colorTheme.comboBox.border.default,
          {
            [colorTheme.comboBox.disabled.styles]: isDisabled,
            'input-container-hover-styles': isHovered,
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
              inputClassName={cn(
                `input-field-styles ${getStylesBasedOnSize(
                  props.size
                )}  ${inputFieldClassName}`,
                inputClassName
              )}
              isDisabled={isDisabled}
              validationState={validationState}
              disableFocusRing
            />
          </div>
        </div>
      </div>
    </FocusRingWithBorder>
  );
};

export default TrayComboBoxSearchInput;
