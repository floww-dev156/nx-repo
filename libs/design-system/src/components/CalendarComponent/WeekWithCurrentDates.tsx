import React from 'react'
import { observer } from 'mobx-react'

import Day from './Day'
import { CustomDayProps } from './types'

interface WeekWithCurrentDatesProps {
   currDayCount: number
   selectedDate: number
   totalDays: number
   activeDate: boolean
   activeDay: number
   givenDate: Date
   onSelectDate: (seletedDate: Date) => void
   disablePreviousDates?: boolean
   minValue?: Date
   maxValue?: Date
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const WeekWithCurrentDates = (props: WeekWithCurrentDatesProps) => {
   const {
      currDayCount,
      selectedDate,
      totalDays,
      activeDate,
      activeDay,
      givenDate,
      onSelectDate,
      disablePreviousDates,
      renderCustomDay,
      minValue,
      maxValue
   } = props
   let dayCount = currDayCount
   let monthComplete = false
   const renderWeek = () => {
      let iter = 1
      const currWeek: JSX.Element[] = []
      while (iter < 8) {
         const selected = dayCount === selectedDate && !monthComplete
         const showCondition = dayCount > 0 && dayCount <= totalDays
         currWeek.push(
            <Day
               key={dayCount.toString()}
               selected={selected}
               date={dayCount}
               currentDay={dayCount === activeDay && activeDate}
               onSelectDate={onSelectDate}
               currMonthState={0}
               givenDate={givenDate}
               empty={showCondition ? false : true}
               disablePreviousDates={disablePreviousDates}
               renderCustomDay={renderCustomDay}
               minValue={minValue}
               maxValue={maxValue}
            />
         )
         if (dayCount > totalDays) {
            monthComplete = true
         }
         iter = iter + 1
         dayCount = dayCount + 1
      }
      return currWeek
   }

   return <>{renderWeek()}</>
}

export default observer(WeekWithCurrentDates)
