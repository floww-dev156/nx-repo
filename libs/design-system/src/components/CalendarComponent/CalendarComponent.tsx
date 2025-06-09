import React from 'react'
import { getDate, getMonth, getYear, isSameMonth, isSameYear } from 'date-fns'
import { observer } from 'mobx-react'

import Month from './Month'

import { CustomDayProps } from './types'
import { WEEK_DAYS } from './constants'

import {
   calendarComponentContainerClassName,
   weekDayClassName,
   weekDaysContainerClassName
} from './styles'

interface WeekDays {
   label: string
   value: number
}
interface CalendarProps {
   date?: Date
   onChangeDate: (date: Date) => void
   selectedDate: Date
   showOtherMonths: boolean
   disablePreviousDates?: boolean
   minValue?: Date
   maxValue?: Date
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const CalendarComponent = (props: CalendarProps) => {
   const { date, selectedDate, onChangeDate, ...otherProps } = props

   const calendarDate = date ? date : new Date()

   const onSelectDate = (givenDate: Date) => {
      onChangeDate(givenDate)
   }

   const isDayInSameMonthAndYear =
      isSameMonth(selectedDate, calendarDate) &&
      isSameYear(selectedDate, calendarDate)

   const renderWeekDays = (item: WeekDays) => (
      <p key={item.value.toString()} className={weekDayClassName}>
         {item.label}
      </p>
   )

   return (
      <div className={calendarComponentContainerClassName}>
         <div className={weekDaysContainerClassName}>
            {WEEK_DAYS.map(renderWeekDays)}
         </div>
         <Month
            selectedDate={isDayInSameMonthAndYear ? getDate(selectedDate) : 0}
            onSelectDate={onSelectDate}
            month={getMonth(calendarDate)}
            year={getYear(calendarDate)}
            {...otherProps}
         />
      </div>
   )
}

export default observer(CalendarComponent)
