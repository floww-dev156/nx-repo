import cn from 'classnames';
import { format } from 'date-fns';
import React, { ReactElement, useRef } from 'react';

import { useDatePicker } from '@react-aria/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useDatePickerState } from '@react-stately/datepicker';
import { DateValue, SpectrumDatePickerProps } from '@react-types/datepicker';
import { Placement } from '@react-types/overlays';
import { FocusableRef } from '@react-types/shared';
import { CloseIcon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../../Theme/Provider';
import { CalenderIcon } from '../../../icons/CalenderIcon';
import { BasicSize } from '../../../types';

import { DialogTrigger } from '../../DialogTrigger/DialogTrigger';
import {
  ValidationStateEnum,
  defaultDateTimeFormat,
} from '../common/constants/DateTimeConstants';
import { commonDateFieldTriggerSizes } from '../common/styles/sizes';
import { FocusRingWithBorder } from '../../FocusRing';
import {
  getDateFieldTriggerSizingStyles,
  getDateFieldTriggerThemeStyles,
} from '../common/styles/styles';
import { Hint } from '../../Hint';
import { Label } from '../../Label';

import { CalendarAndTimeField } from './CalenderAndTimeField';
import { granularityValues } from './constants';

import { PrimaryActionArgs } from './DateTimePicker';
import {
  calenderContainerInvalidClassName,
  calenderTriggerClassName,
  dialogTriggerContainerClassName,
  getPlaceHolderTextStyles,
  getValueTextStyles,
  triggerContentContainer,
} from './styles';

export interface AdobeDatePickerProps<T extends DateValue>
  extends SpectrumDatePickerProps<T> {
  size: BasicSize;
  onClearDate: () => void;
  showTime?: boolean;
  placeholderText?: string;
  placement?: Placement;
  hourPlaceholderText?: string;
  minutePlaceholderText?: string;
  customFormat?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  isClearable?: boolean;
  renderCustomTrigger?: () => ReactElement;
  onSelectDateTime?: (value: Date | null) => void;
  renderPrimaryAction?: (args: PrimaryActionArgs) => ReactElement;
  containerClassName?: string;
  descriptionClassName?: string;
  labelClassName?: string;
  renderRequiredIcon?: () => React.ReactElement;
  offset?: number;
  triggerRef?: React.RefObject<HTMLElement>;
  shouldShowClearButtonInCalender?: boolean;
  shouldDisablePageActions?: boolean;
}

export function getDateFromDateObject(
  date: Date | null,
  customFormat: string
): string {
  if (date && customFormat) {
    return format(date, customFormat);
  }
  return '';
}

function AdobeDateTimePicker<T extends DateValue>(
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
    maxVisibleMonths = 1,
    validationState,
    hourPlaceholderText,
    minutePlaceholderText,
    placeholderText = 'Select Date Time',
    customFormat = defaultDateTimeFormat,
    showTime = true,
    primaryActionText,
    secondaryActionText,
    onClearDate,
    isClearable = true,
    renderCustomTrigger,
    onSelectDateTime,
    renderPrimaryAction,
    containerClassName,
    descriptionClassName = '',
    labelClassName,
    renderRequiredIcon,
  } = props;

  let { hoverProps } = useHover({ isDisabled });
  let targetRef = useRef<HTMLDivElement>(null);

  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: () => !state.hasTime,
  });
  let { groupProps, labelProps, calendarProps } = useDatePicker(
    {
      ...props,
      granularity: showTime
        ? granularityValues['minute']
        : granularityValues['day'],
    },
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

  const dateTimeColoredTheme = theme[colorScheme].dateTimePicker;

  const isError =
    validationState === ValidationStateEnum.Invalid || !!errorMessage;
  let timeGranularity =
    state.granularity === granularityValues['hour'] ||
    state.granularity === granularityValues['minute'] ||
    state.granularity === granularityValues['second']
      ? state.granularity
      : null;

  const presentDate = new Date(state.value);
  const formattedDate = getDateFromDateObject(presentDate, customFormat);

  const onClickCloseIcon = (event: React.SyntheticEvent): void => {
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
            [getPlaceHolderTextStyles(dateTimeColoredTheme)]: !state.value,
            [getValueTextStyles(dateTimeColoredTheme, isDisabled)]: state.value,
          },
          getDateFieldTriggerSizingStyles(size),
          isDisabled ? 'cursor-not-allowed' : ''
        )}
        disabled={isDisabled}
      >
        <div className={cn(triggerContentContainer)}>
          <div className="flex items-center justify-center notranslate">
            <div className="mr-8px">
              <CalenderIcon fill={dateTimeColoredTheme.calenderIconColor} />
            </div>
            {state.value ? formattedDate : placeholderText}
          </div>
          {shouldClearIcon ? (
            <div className="p-8px" onClick={onClickCloseIcon}>
              <CloseIcon
                width={12}
                height={12}
                fill={dateTimeColoredTheme.closeIconColor}
                className={isDisabled ? 'cursor-not-allowed' : ''}
              />
            </div>
          ) : null}
        </div>
      </button>
    );
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
        dialogTriggerClassName={dialogTriggerContainerClassName}
        shouldFlip={props.shouldFlip}
        shouldDisablePageActions={props.shouldDisablePageActions}
      >
        {trigger()}
        {(close) => (
          <CalendarAndTimeField
            {...calendarProps}
            visibleMonths={maxVisibleMonths}
            UNSAFE_className={cn({
              [calenderContainerInvalidClassName]:
                state.validationState === 'invalid',
            })}
            size={size}
            timeValue={state.timeValue}
            granularity={timeGranularity}
            hourCycle={12}
            showTimeField={showTime}
            closeCalendar={close}
            setDateTimeValue={state.setValue}
            minutePlaceholderText={minutePlaceholderText}
            hourPlaceholderText={hourPlaceholderText}
            primaryActionText={primaryActionText}
            secondaryActionText={secondaryActionText}
            onSelectDateTime={onSelectDateTime}
            renderPrimaryAction={renderPrimaryAction}
            onClearDate={onClearDate}
            shouldShowClearButtonInCalender={
              props.shouldShowClearButtonInCalender
            }
          />
        )}
      </DialogTrigger>
    );
  };

  const renderDateTimePicker = () => {
    return (
      <div
        {...mergeProps(groupProps, hoverProps, focusProps)}
        ref={targetRef}
        className={cn(
          getDateFieldTriggerThemeStyles(
            commonDateFieldTriggerColoredTheme,
            isDisabled
          ),
          commonDateFieldTriggerSizes[size].radius,
          containerClassName
        )}
        tabIndex={-1}
      >
        {renderDialog(renderDefaultTrigger)}
      </div>
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

  return (
    <>
      {renderLabel()}
      {renderCustomTrigger ? (
        <div ref={targetRef}>{renderDialog(renderCustomTrigger)}</div>
      ) : (
        <FocusRingWithBorder within isError={isError}>
          {renderDateTimePicker()}
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

const _AdobeDateTimePicker = React.forwardRef(AdobeDateTimePicker) as <
  T extends DateValue
>(
  props: AdobeDatePickerProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _AdobeDateTimePicker as AdobeDateTimePicker };
