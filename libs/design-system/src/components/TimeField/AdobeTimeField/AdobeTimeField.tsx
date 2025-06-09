import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { ReactElement, useRef } from 'react';
import {
  mergeProps,
  useFocusRing,
  useHover,
  useId,
  useLocale,
  useTimeField,
} from 'react-aria';
import { useTimeFieldState } from 'react-stately';

import { ClockOutlineIcon } from '@nx-repo/design-system-icons';
import { TimePickerProps, TimeValue } from '@react-types/datepicker';

import { useThemeContext } from '../../../Theme/Provider';
import { FocusRingVariant } from '../../../types';

import { FocusRingWithBorder } from '../../FocusRing';
import { Hint } from '../../Hint';
import { Label } from '../../Label';

import { DayPeriodEnum, SegmentTypeEnum } from '../constants/constants';
import DateSegmentField from '../DateSegmentField/DateSegmentField';
import DayPeriodToggler from '../DayPeriodToggler/DayPeriodToggler';
import '../index.css';
import {
  clockIconClassName,
  getAdobeTimeFieldContainerThemeStyles,
  segmentsContainerClassName,
  timePickerContainerClassName,
} from './styles';

interface AdobeTimeFieldProps extends TimePickerProps<TimeValue> {
  hint?: React.ReactNode;
  autoFocus?: boolean;
  isRequired?: boolean;
  onFocus?: (e: React.FocusEvent<Element>) => void;
  onBlur?: (e: React.FocusEvent<Element>) => void;
  onKeyDown?: (e: React.KeyboardEvent<Element>) => void;
  containerClassName?: string;
  segmentsContainerClassName?: string;
  dayPeriodTogglerContainerClassName?: string;
  focusRingVariant?: FocusRingVariant;
}

const AdobeTimeField = (props: AdobeTimeFieldProps): React.ReactElement => {
  //@ts-ignore
  const {
    errorMessage,
    hint,
    isDisabled,
    autoFocus,
    isRequired,
    containerClassName = '',
    dayPeriodTogglerContainerClassName,
    focusRingVariant,
  } = props;

  const { locale } = useLocale();
  const hintId = useId();
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const { focusProps } = useFocusRing({
    within: true,
    isTextInput: true,
    autoFocus,
  });
  const targetRef = useRef<InstanceType<typeof HTMLDivElement>>(null);

  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { labelProps, fieldProps } = useTimeField(props, state, targetRef);

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];
  const { timePicker } = coloredTheme;

  const shouldDisplaySegment = (segmentType: string): boolean =>
    segmentType !== SegmentTypeEnum.DayPeriod;

  const updateDayPeriod = (dayPeriod: DayPeriodEnum): void => {
    const dayPeriodValue = dayPeriod === DayPeriodEnum.AM ? 0 : 12;
    state.setSegment(SegmentTypeEnum.DayPeriod, dayPeriodValue);
  };

  const renderDataSegments = (): React.ReactElement | null => (
    <div
      className={cn(
        segmentsContainerClassName,
        props.segmentsContainerClassName
      )}
    >
      {state.segments.map((segment, i) =>
        shouldDisplaySegment(segment.type) ? (
          <DateSegmentField
            key={i}
            segment={segment}
            state={state}
            isDisabled={isDisabled ? isDisabled : false}
          />
        ) : null
      )}
    </div>
  );

  const renderClockIcon = (): React.ReactElement => (
    <div className={clockIconClassName}>
      <ClockOutlineIcon
        width={16}
        height={16}
        fill={timePicker.toggle.clockFillIconColor}
      />
    </div>
  );

  const getDayPeriodSegmentValue = (): DayPeriodEnum => {
    const segment = state.segments.find(
      (segment) => segment.type === SegmentTypeEnum.DayPeriod
    );

    return segment?.text.toLowerCase() === 'pm'
      ? DayPeriodEnum.PM
      : DayPeriodEnum.AM;
  };

  const renderLabel = (): ReactElement | null => {
    return props.label ? (
      <Label
        labelProps={{ ...labelProps }}
        isRequired={isRequired}
        size={'ExtraSmall'}
      >
        {props.label}
      </Label>
    ) : null;
  };

  return (
    <div className={timePickerContainerClassName}>
      {renderLabel()}

      <FocusRingWithBorder
        within={true}
        isError={!!errorMessage}
        variant={focusRingVariant}
      >
        <div
          {...mergeProps(hoverProps, focusProps, fieldProps)}
          ref={targetRef}
          className={cn(
            getAdobeTimeFieldContainerThemeStyles(
              timePicker.timePickerContainerStyles,
              isDisabled ? isDisabled : false
            ),
            containerClassName
          )}
        >
          {renderClockIcon()}
          {renderDataSegments()}
          <DayPeriodToggler
            key={getDayPeriodSegmentValue()}
            dayPeriod={getDayPeriodSegmentValue()}
            updateDayPeriod={updateDayPeriod}
            isDisabled={isDisabled ? isDisabled : false}
            dayPeriodTogglerContainerClassName={
              dayPeriodTogglerContainerClassName
            }
          />
        </div>
      </FocusRingWithBorder>
      <Hint
        id={hintId}
        //@ts-ignore

        error={errorMessage}
        hint={hint}
      />
    </div>
  );
};

export default observer(AdobeTimeField);
