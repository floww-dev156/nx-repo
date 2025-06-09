import React from 'react'
import { getDate, getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'

import { observer } from 'mobx-react'

import Week from './Week'
import { CustomDayProps } from './types'
import { monthContainerClassName } from './styles'

interface MonthProps {
   month: number
   year: number
   onSelectDate: (seletedDate: Date) => void
   selectedDate: number
   showOtherMonths: boolean
   disablePreviousDates?: boolean
   minValue?: Date
   maxValue?: Date
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const Month = (props: MonthProps) => {
   const { month, year, ...otherProps } = props
   const today = new Date()
   const currDay = getDate(today)
   const currMonth = getMonth(today)
   const currYear = getYear(today)

   const givenDate = new Date(year, month) // can pass this object from parent itself instead of creating here
   const startWeekDayNum = getDay(givenDate)

   const isActiveDate = currYear === year && currMonth === month

   let dayRenderCount = 1 - startWeekDayNum // inorder to render prev month dates
   const totalDays = getDaysInMonth(givenDate)

   const getPrevMonthDays = () => {
      if (month === 0) {
         return getDaysInMonth(new Date(year - 1, 11))
      }
      return getDaysInMonth(new Date(year, month - 1))
   }

   const prevMonthDays = getPrevMonthDays()
   const renderMonth = () => {
      const weeks: JSX.Element[] = []
      while (dayRenderCount <= totalDays) {
         weeks.push(
            <Week
               key={dayRenderCount.toString()}
               currDayCount={dayRenderCount}
               totalDays={totalDays}
               activeDate={isActiveDate}
               activeDay={currDay}
               startWeekDayNum={startWeekDayNum}
               prevMonthDays={prevMonthDays}
               givenDate={givenDate}
               {...otherProps}
            />
         )
         dayRenderCount = dayRenderCount + 7
      }
      return weeks
   }

   return <div className={monthContainerClassName}>{renderMonth()}</div>
}

export default observer(Month)
