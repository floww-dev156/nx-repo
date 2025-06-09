import React from 'react';
import { ClockOutlineIcon } from '@nx-repo/design-system-icons';

import { ChevronLeftArrowIcon } from '../../icons/ChevronLeftArrowIcon';
import { ChevronRightArrowIcon } from '../../icons/ChevronRightArrowIcon';
import { colors } from '../../style-guide';
import { Button, Hierarchy, SubVariant } from '../Button';
import {
  IconButton,
  IconButtonHierarchy,
  IconButtonSubVariant,
} from '../IconButton';
import CalendarComponent from '../CalendarComponent/CalendarComponent';
import RelativeDaySelect from './RelativeDaySelect';

import { formatTimeInAMPM, getMonthYear } from './utils';

import {
  calendarFooterBtnContainerClassName,
  calendarFooterClassName,
  monthYearPickerContainerClassName,
  timePickerContainerClassName,
  timePickerTextClassName,
  timePickerTextContainerClassName,
  timePickerValueClassName,
} from './styles';
import './index.css';

interface MobileCalendarProps {
  selectedDateTime: Date;
  onDateTimeChange: (date: Date) => void;
  isTimePickerOpen?: boolean;
  setIsTimePickerOpen?: (isTimePickerOpen: boolean) => void;
  canSelectTime?: boolean;
  showOtherMonths?: boolean;
  supportRelativeDaySelection?: boolean;
  setIsMonthYearPickerOpen: (isMonthYearPickerOpen: boolean) => void;
  calendarDate?: Date;
  minValue?: Date;
  maxValue?: Date;
  onClickPrevMonth: () => void;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
  onClickNextMonth: () => void;
  setCalendarDate: (date: Date) => void;
}

const MobileCalendar = (props: MobileCalendarProps): React.ReactElement => {
  const {
    selectedDateTime,
    onDateTimeChange,
    canSelectTime,
    showOtherMonths,
    supportRelativeDaySelection = true,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
  } = props;

  const onSelectDate = (date: Date): void => {
    onDateTimeChange(date);
  };

  const openMonthYearPicker = (e) => {
    setTimeout(() => {
      props.setIsMonthYearPickerOpen(true);
    }, 10); //FIXME: the press event is triggering on modal too so added this fix
    e.stopPropagation?.();
  };

  const openTimePicker = (e) => {
    setTimeout(() => {
      props.setIsTimePickerOpen?.(true);
    }, 10); //FIXME: the press event is triggering on modal too so added this fix
    e.stopPropagation?.();
  };

  const renderMonthYearPickerTrigger = () => (
    <>
      <div className={monthYearPickerContainerClassName}>
        <Button
          size={'Small'}
          hierarchy={Hierarchy.Tertiary}
          subVariant={SubVariant.Gray}
          className="font-semibold"
          onClick={openMonthYearPicker}
          rightIcon={() => (
            <ChevronRightArrowIcon
              height={20}
              width={20}
              strokeColor={colors['gray-600']}
            />
          )}
        >
          {props.calendarDate
            ? getMonthYear(props.calendarDate)
            : 'Select Month'}
        </Button>

        <div className="flex items-center">
          <IconButton
            icon={() => <ChevronLeftArrowIcon height={20} width={20} />}
            size={'Small'}
            subVariant={IconButtonSubVariant.Primary}
            hierarchy={IconButtonHierarchy.Tertiary}
            onClick={props.onClickPrevMonth}
          />
          <IconButton
            icon={() => <ChevronRightArrowIcon height={20} width={20} />}
            size={'Small'}
            subVariant={IconButtonSubVariant.Primary}
            hierarchy={IconButtonHierarchy.Tertiary}
            onClick={props.onClickNextMonth}
          />
        </div>
      </div>
    </>
  );

  const renderTimePicker = () => {
    const timePickerTriggerButtonText = selectedDateTime
      ? formatTimeInAMPM(selectedDateTime)
      : 'Set Time';

    return (
      <div className={timePickerContainerClassName}>
        <div className={timePickerTextContainerClassName}>
          <span>
            <ClockOutlineIcon
              fill={colors['gray-500']}
              width={16}
              height={16}
            />
          </span>
          <span className={timePickerTextClassName}>Time</span>
        </div>

        <Button
          hierarchy={Hierarchy.Tertiary}
          size={'Small'}
          subVariant={SubVariant.Gray}
          onClick={openTimePicker}
          className={timePickerValueClassName}
          rightIcon={() => (
            <ChevronRightArrowIcon
              height={20}
              width={20}
              strokeColor={colors['gray-500']}
            />
          )}
        >
          {timePickerTriggerButtonText}
        </Button>
      </div>
    );
  };

  const renderCalendarFooter = () => {
    return (
      <div className={calendarFooterClassName}>
        <div className={calendarFooterBtnContainerClassName}>
          <Button
            hierarchy={Hierarchy.Secondary}
            size={'Small'}
            subVariant={SubVariant.GrayOutline}
            className="w-full font-bold"
            onClick={onSecondaryButtonClick}
          >
            Cancel
          </Button>
        </div>
        <div className={calendarFooterBtnContainerClassName}>
          <Button
            hierarchy={Hierarchy.Primary}
            size={'Small'}
            subVariant={SubVariant.Primary}
            className="w-full font-bold"
            onClick={onPrimaryButtonClick}
          >
            Set
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-full mt-4 notranslate">
      {supportRelativeDaySelection ? (
        <RelativeDaySelect
          setCalendarDate={props.setCalendarDate}
          onDateTimeChange={onDateTimeChange}
        />
      ) : null}

      <div className="pt-3">
        {renderMonthYearPickerTrigger()}
        <div className="px-4 pb-2">
          <CalendarComponent
            onChangeDate={onSelectDate}
            date={props.calendarDate}
            selectedDate={selectedDateTime}
            showOtherMonths={showOtherMonths ?? false}
            minValue={props.minValue}
            maxValue={props.maxValue}
          />
        </div>
      </div>
      {canSelectTime ? renderTimePicker() : null}
      {renderCalendarFooter()}
    </div>
  );
};

export default MobileCalendar;
