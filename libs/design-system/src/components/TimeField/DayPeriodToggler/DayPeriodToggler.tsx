import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import { useThemeContext } from '@nx-repo/design-system';

import { DayPeriodEnum } from '../constants/constants';

import {
  getSelectedThemeStyles,
  getToggleContainerThemeStyles,
  toggleOperatorWrapperClassName,
} from './styles';

interface DayPeriodTogglerProps {
  dayPeriod: DayPeriodEnum;
  updateDayPeriod: (dayPeriod: DayPeriodEnum) => void;
  isDisabled: boolean;
  dayPeriodTogglerContainerClassName?: string;
}

const DayPeriodToggler = (props: DayPeriodTogglerProps): React.ReactElement => {
  const {
    dayPeriod,
    updateDayPeriod,
    isDisabled,
    dayPeriodTogglerContainerClassName,
  } = props;

  const [localDayPeriod, setLocalDayPeriod] =
    useState<DayPeriodEnum>(dayPeriod);

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];
  const { timePicker } = coloredTheme;

  useEffect(() => {
    updateDayPeriod(localDayPeriod);
  }, [localDayPeriod]);

  const isOperatorSelected = (operator: DayPeriodEnum): boolean =>
    operator === localDayPeriod;

  const onToggle = (operator: DayPeriodEnum): void => {
    setLocalDayPeriod(operator);
  };

  return (
    <div
      className={cn(
        toggleOperatorWrapperClassName,
        dayPeriodTogglerContainerClassName
      )}
    >
      <div
        className={getToggleContainerThemeStyles(timePicker.toggle, isDisabled)}
      >
        <div
          className={cn(
            getSelectedThemeStyles(
              isOperatorSelected(DayPeriodEnum.AM),
              timePicker.toggle
            ),
            'notranslate'
          )}
          onClick={() => onToggle(DayPeriodEnum.AM)}
        >
          {DayPeriodEnum.AM}
        </div>
        <div
          className={cn(
            getSelectedThemeStyles(
              isOperatorSelected(DayPeriodEnum.PM),
              timePicker.toggle
            ),
            'notranslate'
          )}
          onClick={() => onToggle(DayPeriodEnum.PM)}
        >
          {DayPeriodEnum.PM}
        </div>
      </div>
    </div>
  );
};

export default observer(DayPeriodToggler);
