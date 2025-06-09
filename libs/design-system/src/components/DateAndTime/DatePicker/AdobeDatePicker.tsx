import cn from 'classnames';
import React, { ReactElement, useRef } from 'react';

import { useDatePicker } from '@react-aria/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useDatePickerState } from '@react-stately/datepicker';
import { DateValue, SpectrumDatePickerProps } from '@react-types/datepicker';
import { Placement } from '@react-types/overlays';
import { CloseIcon } from '@nx-repo/design-system-icons';
import { FocusableRef } from '@react-types/shared';

import { CalenderIcon } from '../../../icons/CalenderIcon';
import { useThemeContext } from '../../../Theme/Provider';
import { BasicSize } from '../../../types';

import { Dialog } from '../../DialogTrigger/Dialog';
import { DialogTrigger } from '../../DialogTrigger/DialogTrigger';
import { FocusRingWithBorder } from '../../FocusRing';
import { Hint } from '../../Hint';
import { Label } from '../../Label';

import { Calendar } from '../common/components/Calender/Calendar';
import {
  defaultDateFormat,
  ValidationStateEnum,
} from '../common/constants/DateTimeConstants';
import {
  getDateFieldTriggerSizingStyles,
  getDateFieldTriggerThemeStyles,
} from '../common/styles/styles';
import { getDateFromDateObject } from '../DateTimePicker/AdobeDateTimePicker';

import {
  calenderContainerClassName,
  calenderContainerInvalidClassName,
  calenderTriggerClassName,
  clearButtonClassName,
  dialogContentClassName,
  dialogTriggerClassName,
  getPlaceHolderTextStyles,
  getValueTextStyles,
  triggerContentContainer,
} from './styles';

export interface AdobeDatePickerProps<T extends DateValue>
  extends SpectrumDatePickerProps<T> {
  size: BasicSize;
  onClearDate: () => void;
  placement?: Placement;
  placeholderText?: string;
  customFormat?: string;

  isClearable?: boolean;
  renderCustomTrigger?: () => ReactElement;
  containerClassName?: string;
  descriptionClassName?: string;
  labelClassName?: string;
  renderRequiredIcon?: () => React.ReactElement;
  offset?: number;
  triggerRef?: React.RefObject<HTMLElement>;
  shouldShowClearButtonInCalender?: boolean;
  shouldDisablePageActions?: boolean;
}

function AdobeDatePicker<T extends DateValue>(
  props: AdobeDatePickerProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  let {
    autoFocus,
    isDisabled,
    isRequired,
    label,
    id,
    errorMessage,
    description,
    placement,
    size,
    onClearDate,
    maxVisibleMonths = 1,
    placeholderText = 'Select Date',
    customFormat = defaultDateFormat,
    isClearable = true,
    renderCustomTrigger,
    containerClassName,
    descriptionClassName = '',
    labelClassName,
    renderRequiredIcon,
  } = props;

  let { hoverProps } = useHover({ isDisabled });
  let targetRef = useRef<InstanceType<typeof HTMLDivElement>>(null);

  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: () => !state.hasTime,
  });
  let { groupProps, labelProps, calendarProps } = useDatePicker(
    props,
    state,
    targetRef
  );
  let { isOpen, setOpen } = state;

  let { focusProps } = useFocusRing({
    within: true,
    isTextInput: true,
    autoFocus,
  });

  const { theme, colorScheme } = useThemeContext();

  const commonDateFieldTriggerColoredTheme =
    theme[colorScheme].commonDateFieldTrigger;

  const coloredTheme = theme[colorScheme].datePicker;

  // Note: this description is intentionally not passed to useDatePicker.
  // The format help text is unnecessary for screen reader users because each segment already has a label.

  const isError = !!errorMessage;

  const presentDate = new Date(state.value);

  const formattedDate = getDateFromDateObject(presentDate, customFormat);

  const onClickCloseIcon = (event: React.SyntheticEvent) => {
    onClearDate();

    event.stopPropagation();
  };

  const renderDefaultTrigger = (): ReactElement => {
    const shouldClearIcon = isClearable && state.value;

    return (
      <button
        className={cn(
          calenderTriggerClassName,
          {
            [getPlaceHolderTextStyles(coloredTheme)]: !state.value,
            [getValueTextStyles(coloredTheme, isDisabled)]: state.value,
          },
          isDisabled ? 'cursor-not-allowed' : ''
        )}
        disabled={isDisabled}
      >
        <div className={cn(triggerContentContainer)}>
          <div className="flex items-center justify-center notranslate">
            <div className="mr-8px">
              <CalenderIcon fill={coloredTheme.calenderIconColor} />
            </div>
            {state.value ? formattedDate : placeholderText}
          </div>
          {shouldClearIcon ? (
            <div className="p-8px" onClick={onClickCloseIcon}>
              <CloseIcon
                width={12}
                height={12}
                fill={coloredTheme.closeIconColor}
                className={isDisabled ? 'cursor-not-allowed' : ''}
              />
            </div>
          ) : null}
        </div>
      </button>
    );
  };

  const onClickClearButton = () => {
    onClearDate();
    setOpen(false);
  };

  const renderDialog = (trigger: () => ReactElement) => {
    const isDialogOpen = isDisabled ? false : isOpen;
    return (
      <DialogTrigger
        type="popover"
        placement={placement}
        targetRef={props.triggerRef ?? targetRef}
        offset={props.offset ?? 4}
        hideArrow
        isOpen={isDialogOpen}
        onOpenChange={setOpen}
        dialogTriggerClassName={dialogTriggerClassName}
        shouldFlip={props.shouldFlip}
        shouldDisablePageActions={props.shouldDisablePageActions}
      >
        {trigger()}

        <Dialog>
          <div
            className={cn(
              dialogContentClassName,
              calenderContainerClassName,
              'notranslate'
            )}
          >
            <Calendar
              {...calendarProps}
              visibleMonths={maxVisibleMonths}
              UNSAFE_className={cn({
                [calenderContainerInvalidClassName]:
                  state.validationState === 'invalid',
              })}
              size={size}
            />
          </div>
          {props.shouldShowClearButtonInCalender ? (
            <div className="border-t border-gray-300 px-4 notranslate">
              <button
                onClick={onClickClearButton}
                className={clearButtonClassName}
              >
                Clear
              </button>
            </div>
          ) : null}
        </Dialog>
      </DialogTrigger>
    );
  };

  const renderLabel = (): ReactElement | null => {
    return label ? (
      <Label
        labelProps={{ ...labelProps }}
        isRequired={isRequired}
        size={size}
        containerClassName={labelClassName}
        renderRequiredIcon={renderRequiredIcon}
      >
        {label}
      </Label>
    ) : null;
  };

  const renderDatePicker = () => {
    return (
      <div
        {...mergeProps(groupProps, hoverProps, focusProps)}
        ref={targetRef}
        className={cn(
          getDateFieldTriggerThemeStyles(
            commonDateFieldTriggerColoredTheme,
            isDisabled
          ),
          getDateFieldTriggerSizingStyles(size),
          containerClassName
        )}
      >
        {renderDialog(renderDefaultTrigger)}
      </div>
    );
  };

  return (
    <>
      {renderLabel()}
      {renderCustomTrigger ? (
        <div ref={targetRef}>{renderDialog(renderCustomTrigger)}</div>
      ) : (
        <FocusRingWithBorder within isError={isError}>
          {renderDatePicker()}
        </FocusRingWithBorder>
      )}

      <Hint
        id={id || ''}
        size={size}
        hint={description}
        error={errorMessage}
        containerClassName={descriptionClassName}
      />
    </>
  );
}

const _AdobeDatePicker = React.forwardRef(AdobeDatePicker) as <
  T extends DateValue
>(
  props: AdobeDatePickerProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _AdobeDatePicker as AdobeDatePicker };
