import React, { useState } from 'react';
import cn from 'classnames';

import { Button, Hierarchy, SubVariant } from '@nx-repo/design-system';

import SwiperPicker from './SwipePicker';
import { ReactBaseModalContainer } from '../../../../../ReactBaseModalContainer';

import {
  calendarFooterBtnContainerClassName,
  SwiperPickerContainerClassName,
  modalClassName,
  modalOverlayClassName,
  swiperActiveRegionClassName,
  swiperFooterClassName,
  swiperGradientOverlayClassName,
} from '../styles';
import {
  MOBILE_DATE_PICKER_START_YEAR,
  MonthYearPickerTypeEnum,
} from '../../../constants/DateTimeConstants';

interface MonthYearPickerProps {
  calendarDate: Date;
  isMonthYearPickerOpen: boolean;
  onChangeMonthYear: (hours: number, minutes: number) => void;
  onCloseMonthYearPicker: () => void;
}

const MonthYearPicker = (props: MonthYearPickerProps): React.ReactElement => {
  const {
    calendarDate,
    isMonthYearPickerOpen,
    onChangeMonthYear,
    onCloseMonthYearPicker,
  } = props;

  const [month, setMonth] = useState<number>(calendarDate.getMonth());
  const [year, setYear] = useState<number>(
    calendarDate.getFullYear() - MOBILE_DATE_PICKER_START_YEAR
  );

  const onSetMonthYear = () => {
    onChangeMonthYear(month, MOBILE_DATE_PICKER_START_YEAR + year);
    onCloseMonthYearPicker();
  };

  return (
    <ReactBaseModalContainer
      onClickCloseIcon={onCloseMonthYearPicker}
      isOpen={isMonthYearPickerOpen}
      className={modalClassName}
      overlayClassName={modalOverlayClassName}
      shouldCloseOnEsc={false}
      shouldRenderCloseIcon={false}
      customCloseIcon={() => <></>}
      hideCloseIcon
    >
      <div className={cn(SwiperPickerContainerClassName, 'notranslate')}>
        {/* Month Picker */}
        <SwiperPicker
          value={month}
          onChange={(value) => {
            setMonth(value);
          }}
          type={MonthYearPickerTypeEnum.Months}
        />

        {/* Year Picker */}
        <SwiperPicker
          value={year}
          onChange={(value) => {
            setYear(value);
          }}
          type={MonthYearPickerTypeEnum.Years}
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
            onClick={onCloseMonthYearPicker}
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
            onPress={onSetMonthYear}
            onClick={onSetMonthYear}
          >
            Set
          </Button>
        </div>
      </div>
    </ReactBaseModalContainer>
  );
};

export default MonthYearPicker;
