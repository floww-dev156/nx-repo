import React, { useState } from 'react';
import cn from 'classnames';

import { Button, Hierarchy, SubVariant } from '@nx-repo/design-system';

import SwiperPicker from './SwipePicker';
import AmPmPicker from './AmPmPicker';
import { ReactBaseModalContainer } from '../../../../../ReactBaseModalContainer';
import {
  TimePickerTypeEnum,
  TimeOfDayEnum,
} from '../../../constants/DateTimeConstants';

import {
  SwiperPickerContainerClassName,
  calendarFooterBtnContainerClassName,
  modalClassName,
  modalOverlayClassName,
  swiperActiveRegionClassName,
  swiperFooterClassName,
  swiperGradientOverlayClassName,
} from '../styles';

interface TimePickerProps {
  isTimePickerOpen: boolean;
  selectedDateTime: Date | null;
  onChangeTime: (hours: number, minutes: number) => void;
  onCloseTimePicker: () => void;
}

const TimePicker = (props: TimePickerProps): React.ReactElement => {
  const {
    isTimePickerOpen,
    selectedDateTime,
    onChangeTime,
    onCloseTimePicker,
  } = props;

  const [hours, setHours] = useState<number>(selectedDateTime?.getHours() ?? 0);
  const [minutes, setMinutes] = useState<number>(
    selectedDateTime?.getMinutes() ?? 0
  );
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDayEnum>(() => {
    if (hours < 12) return TimeOfDayEnum.AM;
    return TimeOfDayEnum.PM;
  });

  const onSetTime = () => {
    const hours24HrFormat =
      timeOfDay === TimeOfDayEnum.AM ? hours % 12 : (hours % 12) + 12;
    onChangeTime(hours24HrFormat, minutes);
    onCloseTimePicker();
  };

  return (
    <ReactBaseModalContainer
      onClickCloseIcon={() => {
        onCloseTimePicker();
      }}
      isOpen={isTimePickerOpen}
      className={modalClassName}
      overlayClassName={modalOverlayClassName}
      closeIconClass={''}
      shouldCloseOnEsc={false}
      shouldRenderCloseIcon={false}
      customCloseIcon={() => <></>}
      hideCloseIcon={true}
    >
      <div className={cn(SwiperPickerContainerClassName, 'notranslate')}>
        {/* Hours Picker */}
        <SwiperPicker
          value={hours}
          onChange={(value) => {
            setHours(value + 1);
          }}
          type={TimePickerTypeEnum.Hours}
        />

        {/* Minutes Picker */}
        <SwiperPicker
          value={minutes}
          onChange={(value) => {
            setMinutes(value);
          }}
          type={TimePickerTypeEnum.Minutes}
        />

        {/* AM PM Picker */}
        <AmPmPicker
          value={timeOfDay}
          onChange={(value) => {
            setTimeOfDay(value);
          }}
        />

        <div className={swiperActiveRegionClassName} />
        <div className={swiperGradientOverlayClassName} />
      </div>
      <div className={swiperFooterClassName}>
        <div className={calendarFooterBtnContainerClassName}>
          <Button
            hierarchy={Hierarchy.Tertiary}
            size={'Small'}
            subVariant={SubVariant.Gray}
            className="w-full font-bold"
            onClick={() => {
              onCloseTimePicker();
            }}
          >
            Cancel
          </Button>
        </div>
        <div className={calendarFooterBtnContainerClassName}>
          <Button
            hierarchy={Hierarchy.Secondary}
            size={'Small'}
            subVariant={SubVariant.Primary}
            className="w-full font-bold"
            onClick={() => {
              onSetTime();
            }}
          >
            Set
          </Button>
        </div>
      </div>
    </ReactBaseModalContainer>
  );
};

export default TimePicker;
