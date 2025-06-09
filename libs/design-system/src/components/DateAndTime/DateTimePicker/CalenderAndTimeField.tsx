import cn from 'classnames'
import React, { ReactElement, useEffect, useState } from 'react'

import { CalendarDateTime } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useTimeFieldState } from '@react-stately/datepicker'
import { DateValue, SpectrumCalendarProps } from '@react-types/calendar'
import { TimeValue } from '@react-types/datepicker'
import { FocusableRef } from '@react-types/shared'

import { useThemeContext } from '../../../Theme/Provider'
import { BasicSize } from '../../../types'

import { Button, Hierarchy, SubVariant } from '../../Button'

import { Calendar } from '../common/components/Calender/Calendar'
import { convertDateValueObjToDateObj } from '../common/utils/conversionUtils'

import { dayPeriodValues } from './constants'
import { PrimaryActionArgs } from './DateTimePicker'
import {
   actionButtonsContainerClassName,
   applyButtonClassName,
   calenderContainerClassName,
   cancelButtonClassName,
   clearButtonClassName,
   getFooterContainerStyles
} from './styles'
import { TimeField } from './TimeField'

const convertTo24Hour = (hours: number, dayPeriod: string) => {
   if (dayPeriod === dayPeriodValues.pm && hours < 12) hours = hours + 12
   if (dayPeriod === dayPeriodValues.am && hours === 12) hours = hours - 12

   let result = hours

   return result
}

interface CalendarAndTimeFieldProps<T extends DateValue>
   extends SpectrumCalendarProps<T> {
   size: BasicSize
   timeValue: TimeValue
   hourCycle?: 12 | 24
   granularity?: 'hour' | 'minute' | 'second'
   showTimeField: boolean
   closeCalendar: () => void
   setDateTimeValue: (value: DateValue) => void
   hourPlaceholderText?: string
   minutePlaceholderText?: string
   primaryActionText?: string
   secondaryActionText?: string
   onSelectDateTime?: (value: Date | null) => void
   renderPrimaryAction?: (args: PrimaryActionArgs) => ReactElement
   onClearDate?: () => void
   shouldShowClearButtonInCalender?: boolean
}

function CalendarAndTimeField<T extends DateValue>(
   props: CalendarAndTimeFieldProps<T>,
   ref: FocusableRef<HTMLElement>
) {
   const {
      timeValue,
      hourCycle,
      granularity,
      showTimeField,
      closeCalendar,
      hourPlaceholderText,
      minutePlaceholderText,
      primaryActionText: applyButtonText = 'Apply',
      secondaryActionText: cancelButtonText = 'Cancel',
      ...calendarProps
   } = props

   const [tempDate, setTempDate] = useState<DateValue | undefined>(props.value)

   let { locale } = useLocale()

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].dateTimePicker

   let state = useTimeFieldState({
      value: timeValue,
      hourCycle,
      granularity,
      locale
   })

   const computedHours =
      state.segments[0].text !== '––' && state?.segments[0]?.value !== undefined
         ? state?.segments[0]?.value % 12 || 12
         : ''

   const computedDayPeriod = state.segments[0].value
      ? state.segments[0].value >= 12
         ? dayPeriodValues.pm
         : dayPeriodValues.am
      : dayPeriodValues.am

   const computedMinutes =
      state.segments[2].text !== '––' && state?.segments[2]?.value !== undefined
         ? state.segments[2].value
         : ''

   const [hours, setHours] = useState(computedHours)
   const [minutes, setMinutes] = useState(computedMinutes)
   const [dayPeriod, setDayPeriod] = useState(computedDayPeriod)

   const onSelectDateTime = (
      date: DateValue | undefined,
      hours: number | string,
      minutes: number | string,
      dayPeriod: string
   ): void => {
      if (props.onSelectDateTime) {
         let finalHours =
            typeof hours === 'string'
               ? convertTo24Hour(parseInt(hours), dayPeriod)
               : convertTo24Hour(hours, dayPeriod)

         const dateTime = new CalendarDateTime(
            //@ts-ignore
            date?.year,
            date?.month,
            date?.day,
            finalHours,
            minutes
         )

         const convertedValue: Date | null = date
            ? convertDateValueObjToDateObj(dateTime)
            : null

         props.onSelectDateTime(convertedValue)
      }
   }

   const onTempDateChange = (value: DateValue | undefined): void => {
      setTempDate(value)

      onSelectDateTime(value, hours, minutes, dayPeriod)
   }

   const onTempHoursChange = (value: string | number): void => {
      setHours(value)

      onSelectDateTime(tempDate, value, minutes, dayPeriod)
   }

   const onTempMinutesChange = (value: string | number): void => {
      setMinutes(value)

      onSelectDateTime(tempDate, hours, value, dayPeriod)
   }

   const onTempDayPeriodChange = (value: string): void => {
      setDayPeriod(value)

      onSelectDateTime(tempDate, hours, minutes, value)
   }

   const newCalenderProps = {
      ...calendarProps,
      value: tempDate,
      onChange: onTempDateChange
   }

   const onClickApply = (): void => {
      if (tempDate) {
         if (calendarProps.onChange) {
            let finalHours =
               typeof hours === 'string'
                  ? convertTo24Hour(parseInt(hours), dayPeriod)
                  : convertTo24Hour(hours, dayPeriod)
            //TODO: need to resolve this type issue
            const dateTime = new CalendarDateTime(
               //@ts-ignore
               tempDate.year,
               tempDate.month,
               tempDate.day,
               finalHours,
               minutes
            )
            props.setDateTimeValue(dateTime)
         }
      }

      closeCalendar()
   }

   const isApplyButtonDisabled =
      !hours || minutes === undefined || minutes === null || !tempDate

   const onClickClearButton = () => {
      props.onClearDate?.()
      closeCalendar()
   }

   return (
      <>
         <div className={cn(calenderContainerClassName, 'notranslate')}>
            <Calendar {...newCalenderProps} />
         </div>
         <div className={cn(getFooterContainerStyles(coloredTheme))}>
            {showTimeField && (
               <TimeField
                  timeValue={timeValue}
                  granularity={granularity}
                  hourCycle={12}
                  hours={hours}
                  minutes={minutes}
                  dayPeriod={dayPeriod}
                  setHours={onTempHoursChange}
                  setMinutes={onTempMinutesChange}
                  setDayPeriod={onTempDayPeriodChange}
                  hourPlaceholderText={hourPlaceholderText}
                  minutePlaceholderText={minutePlaceholderText}
               />
            )}
            <div className={cn(actionButtonsContainerClassName, 'notranslate')}>
               <Button
                  hierarchy={Hierarchy.Secondary}
                  subVariant={SubVariant.GrayOutline}
                  size={'Medium'}
                  onClick={closeCalendar}
                  className={cancelButtonClassName}
               >
                  {cancelButtonText}
               </Button>
               {props.renderPrimaryAction ? (
                  props.renderPrimaryAction({
                     isDisabled: isApplyButtonDisabled ?? false,
                     setDateTime: props.setDateTimeValue,
                     closeCalendar
                  })
               ) : (
                  <Button
                     hierarchy={Hierarchy.Primary}
                     subVariant={SubVariant.Primary}
                     size={'Medium'}
                     className={applyButtonClassName}
                     onClick={onClickApply}
                     isDisabled={isApplyButtonDisabled}
                  >
                     {applyButtonText}
                  </Button>
               )}
            </div>
         </div>
         {props.shouldShowClearButtonInCalender ? (
            <div className='border-t border-gray-300 px-4 notranslate'>
               <button
                  onClick={onClickClearButton}
                  className={clearButtonClassName}
               >
                  Clear
               </button>
            </div>
         ) : null}
      </>
   )
}

const _CalendarAndTimeField = React.forwardRef(CalendarAndTimeField) as <
   T extends DateValue
>(
   props: CalendarAndTimeFieldProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _CalendarAndTimeField as CalendarAndTimeField }
