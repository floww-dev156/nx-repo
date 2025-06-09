import cn from 'classnames'
import React, { MutableRefObject, ReactElement, useRef } from 'react'

import { TimeValue } from '@react-types/datepicker'

import { useThemeContext } from '../../../Theme/Provider'

import { dayPeriodValues } from './constants'
import { DayPeriodToggler } from './DayPeriodToggler'
import { getSeparatorStyles, timeFieldsContainerClassName } from './styles'
import { TimeInput } from './TimeInput'

interface TimeFieldProps {
   timeValue: TimeValue
   hours: string | number
   setHours: (value: string | number) => void
   minutes: string | number
   setMinutes: (value: string | number) => void
   dayPeriod: string
   hourCycle?: 12 | 24
   granularity?: 'hour' | 'minute' | 'second'
   setDayPeriod: (value: string) => void
   hourPlaceholderText?: string
   minutePlaceholderText?: string
}

const TimeField = (props: TimeFieldProps): ReactElement => {
   const {
      hours,
      minutes,
      dayPeriod,
      setHours,
      setMinutes,
      setDayPeriod,
      hourPlaceholderText = 'hh',
      minutePlaceholderText = 'mm'
   } = props

   const hoursInputRef = useRef<HTMLInputElement>(null)
   const minutesInputRef = useRef<HTMLInputElement>(null)
   const dayPeriodRef = useRef<HTMLDivElement>(null)

   const { theme, colorScheme } = useThemeContext()

   const coloredTheme = theme[colorScheme].dateTimePicker

   const onChangeMinutes = event => {
      if (event.target.value < 61 && event.target.value >= 0) {
         setMinutes(event.target?.value)
         if (event.target.value.length === 2) dayPeriodRef?.current?.focus()
      }
   }
   const onChangeHours = event => {
      if (event.target.value < 13 && event.target.value >= 0) {
         setHours(event.target?.value)
         if (event.target.value.length === 2) minutesInputRef?.current?.focus()
      }
   }

   const onClickUpArrow = (): void => {
      setDayPeriod(dayPeriodValues.am)
   }

   const onClickDownArrow = (): void => {
      setDayPeriod(dayPeriodValues.pm)
   }

   return (
      <div className={cn(timeFieldsContainerClassName, 'notranslate')}>
         <TimeInput
            ref={hoursInputRef}
            placeholder={hourPlaceholderText}
            value={hours}
            onChange={onChangeHours}
            max={12}
            min={0}
         />
         <div className={getSeparatorStyles(coloredTheme)}>:</div>
         <TimeInput
            ref={minutesInputRef}
            placeholder={minutePlaceholderText}
            value={minutes}
            onChange={onChangeMinutes}
            max={60}
            min={0}
         />
         <div className={getSeparatorStyles(coloredTheme)}>:</div>
         <DayPeriodToggler
            ref={dayPeriodRef}
            value={dayPeriod}
            onClickUpArrow={onClickUpArrow}
            onClickDownArrow={onClickDownArrow}
         />
      </div>
   )
}

export { TimeField }
