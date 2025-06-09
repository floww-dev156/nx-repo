import React from 'react'
import { observer } from 'mobx-react'

import Day from './Day'
import { CustomDayProps } from './types'

interface WeekWithOtherDatesProps {
   currDayCount: number
   selectedDate: number
   totalDays: number
   activeDate: boolean
   activeDay: number
   givenDate: Date
   onSelectDate: (seletedDate: Date) => void
   startWeekDayNum: number
   prevMonthStartDateToShow: number
   disablePreviousDates?: boolean
   minValue?: Date
   maxValue?: Date
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const WeekWithOtherDates = (props: WeekWithOtherDatesProps) => {
   const {
      currDayCount,
      selectedDate,
      totalDays,
      activeDate,
      activeDay,
      givenDate,
      onSelectDate,
      startWeekDayNum,
      prevMonthStartDateToShow,
      disablePreviousDates,
      renderCustomDay,
      minValue,
      maxValue
   } = props
   let monthComplete = false
   let currMonthState = startWeekDayNum ? -1 : 0
   let dayCount = currDayCount
   let previousMonthStartDateToShow = prevMonthStartDateToShow

   const renderWeek = () => {
      let iter = 1
      const currWeek: JSX.Element[] = []
      while (iter < 8) {
         const selected = dayCount === selectedDate && !monthComplete

         if (dayCount > totalDays) {
            dayCount = 1
            monthComplete = true
            currMonthState = 1
         }

         const dayProps = {
            key: dayCount.toString(),
            currMonthState,
            onSelectDate,
            givenDate,
            disablePreviousDates,
            renderCustomDay,
            minValue,
            maxValue
         }

         if (dayCount > 0) {
            currMonthState = monthComplete ? 1 : 0
            currWeek.push(
               <Day
                  {...dayProps}
                  selected={selected}
                  date={dayCount}
                  currentDay={dayCount === activeDay && activeDate}
               />
            )
         } else {
            currWeek.push(
               <Day
                  {...dayProps}
                  selected={false}
                  date={previousMonthStartDateToShow}
                  currentDay={false}
               />
            )
            previousMonthStartDateToShow = previousMonthStartDateToShow + 1
         }

         iter = iter + 1
         dayCount = dayCount + 1
      }
      return currWeek
   }

   return <>{renderWeek()}</>
}

export default observer(WeekWithOtherDates)
