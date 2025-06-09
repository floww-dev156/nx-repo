import React, { forwardRef, ReactElement, ReactNode, useRef } from 'react';

import cn from 'classnames';
import { AriaTextFieldOptions } from '@react-aria/textfield';

import { useFocus, useFocusWithin } from '@react-aria/interactions';
import { mergeProps, useId } from '@react-aria/utils';

import { useThemeContext } from '../../Theme/Provider';
import { BasicSize, FocusRingVariant } from '../../types';
import { ENABLE_DATA_SANITIZATION } from '../../constants/DataSanitizationConstants';

import { Label } from '../Label';
import { FocusRing } from '../FocusRing';
import { Hint } from '../Hint';

import { sizeStyles } from './sizes';
import {
  getElementTypeStyles,
  getInputContainerStyles,
  inputContainerStyles,
} from './styles';
import { getDomSanitizedValue } from '../../utils/MarkdownContentUtils';

export interface TextBaseFieldProps<T extends 'input' | 'textarea'>
  extends AriaTextFieldOptions<T> {
  size: BasicSize;
  ref?: React.ForwardedRef<HTMLInputElement>;
  hint?: ReactNode;
  multiLine?: boolean;
  leftElement?: React.ComponentType<any>;

  rightElement?: React.ComponentType<any>;

  color?: string;

  containerClassName?: string;
  enableDataSanitization?: boolean;

  inputContainerClassName?: string;

  inputClassName?: string;

  focusRingVariant?: FocusRingVariant;

  hintClassName?: string;

  labelClassName?: string;
  isRequired?: boolean;
  shouldShowHint?: boolean;
  title?: string;

  inputProps:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  renderRequiredIcon?: () => React.ReactElement;
}

export const TextAreaTextFieldBase = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextBaseFieldProps<'input' | 'textarea'>
>((props: TextBaseFieldProps<'input' | 'textarea'>, forwardedRef) => {
  const {
    autoFocus = false,
    errorMessage,
    multiLine = true,
    hint,
    isDisabled = false,
    label,
    leftElement: LeftElement,
    rightElement: RightElement,
    containerClassName = 'w-full',
    inputContainerClassName = '',
    inputClassName = '',
    hintClassName = '',
    labelClassName = '',
    isRequired,
    shouldShowHint = true,
    inputProps,
    labelProps,
    size,
    title,
    focusRingVariant,
    renderRequiredIcon,
  } = props;

  const defaultInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const inputRef = forwardedRef || defaultInputRef;

  const [isFocusWithin, setFocusWithin] = React.useState(false);
  const { focusWithinProps } = useFocusWithin({
    isDisabled,
    onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });
  const { focusProps } = useFocus({
    onFocusChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  const hintId = useId();

  const isDataSanitizationEnabled =
    props.enableDataSanitization ?? ENABLE_DATA_SANITIZATION;

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];
  const sizeContext = sizeStyles[size];

  const shouldHighlightErrorState =
    errorMessage && !isFocusWithin ? true : false;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (isDataSanitizationEnabled) {
      const sanitizedInputValue = getDomSanitizedValue(inputValue);

      props.onChange?.(sanitizedInputValue);
    } else {
      props.onChange?.(inputValue);
    }
  };

  const renderInputContainer = (): ReactElement => {
    const { borderColor, bgColor } = getInputContainerStyles(
      {
        isDisabled,
        isFocused: isFocusWithin,
        isError: shouldHighlightErrorState,
      },
      coloredTheme
    );

    const { textAreaCommonStyles, textColor, placeholderTextColor } =
      getElementTypeStyles(
        {
          isDisabled,
          isFocused: isFocusWithin,
          isError: shouldHighlightErrorState,
        },
        coloredTheme
      );

    return (
      <div
        {...focusWithinProps}
        className={cn(
          sizeContext.inputContainerClassName,
          inputContainerClassName,
          inputContainerStyles,
          borderColor,
          bgColor,
          {
            'cursor-not-allowed': isDisabled,
          }
        )}
      >
        {LeftElement ? (
          <LeftElement
            color={
              shouldHighlightErrorState
                ? coloredTheme.textBaseField.error.tex
                : null
            }
          />
        ) : null}
        <textarea
          ref={inputRef as any}
          lens-role="text-field"
          rows={1}
          {...mergeProps(focusProps, inputProps)}
          id="text-area-design-system"
          autoComplete="off"
          className={cn(
            {
              disabled: isDisabled,
            },
            sizeContext.inputClassName,
            inputClassName,
            textAreaCommonStyles,
            textColor,
            placeholderTextColor
          )}
          required={isRequired}
          onChange={handleChange}
        />

        {RightElement ? (
          <RightElement
            color={
              shouldHighlightErrorState
                ? coloredTheme.textBaseField.error.color
                : null
            }
          />
        ) : null}
      </div>
    );
  };

  return (
    <div className={cn('flex flex-col', containerClassName)} title={title}>
      {label ? (
        <Label
          labelProps={labelProps}
          containerClassName={cn(labelClassName)}
          isRequired={isRequired}
          size={size}
          renderRequiredIcon={renderRequiredIcon}
        >
          {label}
        </Label>
      ) : null}

      <FocusRing
        autoFocus={autoFocus}
        within
        isError={shouldHighlightErrorState}
        size={size}
        variant={focusRingVariant}
      >
        {renderInputContainer()}
      </FocusRing>

      {shouldShowHint && (
        <Hint
          id={hintId}
          hint={hint}
          //@ts-ignore
          error={errorMessage && !isFocusWithin ? errorMessage : ''}
          containerClassName={cn(hintClassName)}
          size={size}
        />
      )}
    </div>
  );
});
