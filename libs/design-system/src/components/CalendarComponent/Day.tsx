import React from 'react'

import { getMonth, getYear, isPast, isSameDay } from 'date-fns'
import { observer } from 'mobx-react'

import { OutlineStarIcon } from '../../icons/OutlineStarIcon'

import { isDateWithinRange } from './utils'
import { CustomDayProps } from './types'
import { colors } from '../../style-guide/colors'
import {
   dayContainerClassName,
   emptyDayClassName,
   getDayContainerStyles,
   getDayDotStyles,
   getSelectedDayStyles
} from './styles'

interface DayProps {
   selected?: boolean
   currentDay?: boolean
   date: number
   empty?: boolean
   currMonthState?: number
   onSelectDate: (selectedDate: Date) => void
   givenDate: Date
   minValue?: Date
   maxValue?: Date
   disablePreviousDates?: boolean
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const Day = (props: DayProps) => {
   const {
      selected,
      currentDay,
      date,
      empty,
      currMonthState,
      onSelectDate,
      givenDate,
      disablePreviousDates,
      renderCustomDay,
      minValue,
      maxValue
   } = props

   const selectedDate = new Date(getYear(givenDate), getMonth(givenDate), date)
   const isDisabledDay = disablePreviousDates
      ? isPast(selectedDate) && !isSameDay(selectedDate, new Date())
         ? true
         : false
      : false

   const isDayDisabled =
      !(
         (currMonthState === 0 && !isDisabledDay) ||
         (currMonthState === 0 && !disablePreviousDates)
      ) || Boolean(empty)

   const isDayInRange = isDateWithinRange(selectedDate, minValue, maxValue)

   const handleDayPress = () => {
      isDayInRange && onSelectDate(selectedDate)
   }

   const isCurrentMonth = currMonthState === 0

   const selectedDayStyles = getSelectedDayStyles(
      isDisabledDay || !isDayInRange,
      isCurrentMonth,
      selected
   )

   const customDayProps: CustomDayProps = {
      date: date,
      givenDate: selectedDate,
      selected: selected,
      isDisabled: isDayDisabled,
      onChangeDate: onSelectDate,
      isCurrentMonth: isCurrentMonth,
      empty: empty,
      minValue,
      maxValue
   }

   const renderDefaultDay = () => (
      <div
         onClick={() => {
            !isDayDisabled && handleDayPress()
         }}
         className={dayContainerClassName}
      >
         {empty ? (
            <div className={emptyDayClassName} />
         ) : (
            <div className={getDayContainerStyles(selected, currentDay)}>
               {currentDay && isCurrentMonth ? (
                  <OutlineStarIcon
                     strokeColor={
                        selected ? colors['base-white'] : colors['gray-700']
                     }
                  />
               ) : (
                  <p className={selectedDayStyles}>{date}</p>
               )}
               {selected || currentDay ? (
                  <div className={getDayDotStyles(currentDay)} />
               ) : null}
            </div>
         )}
      </div>
   )

   return renderCustomDay ? renderCustomDay(customDayProps) : renderDefaultDay()
}

export default observer(Day)
