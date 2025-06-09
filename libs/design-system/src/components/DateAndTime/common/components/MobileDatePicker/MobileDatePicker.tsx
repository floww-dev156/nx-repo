import React, { ReactElement, useEffect, useState } from 'react';
import cn from 'classnames';
import {
  addMonths,
  startOfMonth,
  subMonths,
  setMonth,
  setYear,
  setHours,
  setMinutes,
} from 'date-fns';
import { DateValue } from '@react-types/datepicker';
import { CloseIcon } from '@nx-repo/design-system-icons';

import TimePicker from './TimePicker/TimePicker';
import MonthYearPicker from './MonthYearPicker/MonthYearPicker';
import { useThemeContext } from '../../../../../Theme/Provider';
import { CalenderIcon } from '../../../../../icons/CalenderIcon';
import { Tray } from '../../../../Tray';
import MobileCalendar from '../../../../MobileCalendar/MobileCalendar';
import { AdobeDatePickerProps } from '../../../DatePicker/AdobeDatePicker';

import { getDateFromDateObject } from '../../../DateTimePicker/AdobeDateTimePicker';
import { FocusRingWithBorder } from '../../../../FocusRing/FocusRingWithBorder';
import {
  defaultDateFormat,
  defaultDateTimeFormat,
} from '../../constants/DateTimeConstants';
import { Label } from '../../../../Label';
import { Hint } from '../../../../Hint';

import {
  getDateFieldTriggerSizingStyles,
  getDateFieldTriggerThemeStyles,
} from '../../styles/styles';
import {
  calenderTriggerClassName,
  getPlaceHolderTextStyles,
  getValueTextStyles,
  triggerContentContainer,
} from './styles';

interface MobileDatePickerProps
  extends Omit<
    AdobeDatePickerProps<DateValue>,
    'minValue' | 'maxValue' | 'value' | 'defaultValue' | 'onChange'
  > {
  canSelectTime?: boolean;
  defaultValue?: Date | null;
  minValue?: Date;
  maxValue?: Date;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
}

export const MobileDatePicker = (props: MobileDatePickerProps) => {
  let {
    isDisabled,
    size,
    onClearDate,
    placeholderText,
    isClearable = true,
    customFormat,
    containerClassName,
    errorMessage,
    canSelectTime,
    label,
    isRequired,
    labelClassName,
    renderRequiredIcon,
    id,
    description,
    descriptionClassName,
    minValue,
    maxValue,
  } = props;

  useEffect(() => {
    if (props.value && props.defaultValue) {
      throw new Error(
        'Component should either controlled or uncontrolled, kindly send only prop between value and default value'
      );
    }
  }, [props.value, props.defaultValue]);

  const [isMobileCalendarOpen, setIsMobileCalendarOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [isMonthYearPickerOpen, setIsMonthYearPickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(() =>
    props.defaultValue
      ? props.defaultValue
      : props.value
      ? props.value
      : new Date()
  );
  const [confirmedDate, setConfirmedDate] = useState<Date | null>(
    props.defaultValue ? props.defaultValue : props.value ? props.value : null
  );

  const { theme, colorScheme } = useThemeContext();

  const commonDateFieldTriggerColoredTheme =
    theme[colorScheme].commonDateFieldTrigger;

  const coloredTheme = theme[colorScheme].datePicker;
  const isError = !!errorMessage;

  useEffect(() => {
    if (isMonthYearPickerOpen || isTimePickerOpen) {
      setIsMobileCalendarOpen(false);
    }
  }, [isMonthYearPickerOpen, isTimePickerOpen]);

  const [calendarDate, setCalendarDate] = useState<Date>(
    selectedDate ?? startOfMonth(new Date())
  );

  const onClickPrevMonth = (): void => {
    setCalendarDate(subMonths(calendarDate, 1));
  };

  const onClickNextMonth = (): void => {
    setCalendarDate(addMonths(calendarDate, 1));
  };

  const onClickCloseIcon = (event: React.SyntheticEvent) => {
    onClearDate();
    setConfirmedDate(null);
    event.stopPropagation();
  };

  const onChangeMonthYear = (month: number, year: number): void => {
    const updatedMonthDateTime = setMonth(calendarDate, month);
    setCalendarDate(setYear(updatedMonthDateTime, year));
  };

  const onCloseMonthYearPicker = () => {
    setIsMonthYearPickerOpen(false);
    setIsMobileCalendarOpen(true);
  };

  const onCloseTimePicker = () => {
    setIsTimePickerOpen(false);
    setIsMobileCalendarOpen(true);
  };

  const closeMobileDatePicker = () => {
    setIsMobileCalendarOpen(false);
  };

  const onChangeTime = (hours: number, minutes: number): void => {
    if (selectedDate) {
      const updateHoursDateTime = setHours(selectedDate, hours);
      const updatedDateTime = setMinutes(updateHoursDateTime, minutes);
      setSelectedDate(updatedDateTime);
    }
  };

  const dateTimeFormat = customFormat
    ? customFormat
    : canSelectTime
    ? defaultDateTimeFormat
    : defaultDateFormat;

  const formattedDate = getDateFromDateObject(confirmedDate, dateTimeFormat);

  const placeholder =
    placeholderText ?? `Select Date ${canSelectTime ? 'Time' : ''}`;

  const onDatePickerSetButtonClick = () => {
    setConfirmedDate(selectedDate);
    props.onChange?.(selectedDate);
    closeMobileDatePicker();
  };

  const renderLabel = (): ReactElement | null => {
    return label ? (
      <Label
        isRequired={isRequired}
        size={size}
        containerClassName={labelClassName}
        renderRequiredIcon={renderRequiredIcon}
      >
        {label}
      </Label>
    ) : null;
  };

  const renderCalendarTrigger = (): ReactElement => {
    const shouldClearIcon = isClearable && confirmedDate;

    return (
      <button
        className={cn(calenderTriggerClassName, {
          [getPlaceHolderTextStyles(coloredTheme)]: !confirmedDate,
          [getValueTextStyles(coloredTheme)]: confirmedDate,
        })}
        disabled={isDisabled}
        onClick={() => {
          setIsMobileCalendarOpen(true);
        }}
      >
        <div className={cn(triggerContentContainer)}>
          <div className="flex items-center justify-center notranslate">
            <div className="mr-8px">
              <CalenderIcon fill={coloredTheme.calenderIconColor} />
            </div>
            {confirmedDate ? formattedDate : placeholder}
          </div>
          {shouldClearIcon ? (
            <div className="p-8px" onClick={onClickCloseIcon}>
              <CloseIcon
                width={12}
                height={12}
                fill={coloredTheme.closeIconColor}
              />
            </div>
          ) : null}
        </div>
      </button>
    );
  };

  const renderTray = () => {
    return (
      <Tray
        isOpen={isMobileCalendarOpen}
        onClose={() => {
          if (!isMonthYearPickerOpen) {
            setIsMobileCalendarOpen(false);
          }
        }}
        trayChildrenWrapperClassName=""
        trayContainerClassName=""
        isNonModal
      >
        <MobileCalendar
          selectedDateTime={selectedDate}
          onDateTimeChange={(date: Date) => {
            setSelectedDate(date);
          }}
          setIsMonthYearPickerOpen={setIsMonthYearPickerOpen}
          onClickPrevMonth={onClickPrevMonth}
          onClickNextMonth={onClickNextMonth}
          setCalendarDate={setCalendarDate}
          onPrimaryButtonClick={onDatePickerSetButtonClick}
          onSecondaryButtonClick={closeMobileDatePicker}
          calendarDate={calendarDate}
          canSelectTime={canSelectTime}
          isTimePickerOpen={isTimePickerOpen}
          setIsTimePickerOpen={setIsTimePickerOpen}
          minValue={minValue}
          maxValue={maxValue}
        />
      </Tray>
    );
  };

  const renderMobileDatePicker = () => {
    return (
      <div
        className={cn(
          getDateFieldTriggerThemeStyles(
            commonDateFieldTriggerColoredTheme,
            isDisabled
          ),
          getDateFieldTriggerSizingStyles(size),
          containerClassName
        )}
      >
        {renderCalendarTrigger()}
      </div>
    );
  };

  return (
    <>
      {renderLabel()}

      <FocusRingWithBorder within isError={isError}>
        {renderMobileDatePicker()}
      </FocusRingWithBorder>

      <Hint
        id={id || ''}
        size={size}
        hint={description}
        error={errorMessage}
        containerClassName={descriptionClassName}
      />

      {renderTray()}

      {isMonthYearPickerOpen ? (
        <MonthYearPicker
          calendarDate={calendarDate}
          isMonthYearPickerOpen={isMonthYearPickerOpen}
          onCloseMonthYearPicker={onCloseMonthYearPicker}
          onChangeMonthYear={onChangeMonthYear}
        />
      ) : null}

      {isTimePickerOpen ? (
        <TimePicker
          isTimePickerOpen={isTimePickerOpen}
          selectedDateTime={selectedDate}
          onChangeTime={onChangeTime}
          onCloseTimePicker={onCloseTimePicker}
        />
      ) : null}
    </>
  );
};
