import React from 'react'
import { observer } from 'mobx-react'

import WeekWithCurrentDates from './WeekWithCurrentDates'
import WeekWithOtherDates from './WeekWithOtherDates'

import { CustomDayProps } from './types'
import { weekContainerClassName } from './styles'

interface WeekProps {
   currDayCount: number
   totalDays: number
   activeDate: boolean
   activeDay: number
   startWeekDayNum: number
   prevMonthDays: number
   onSelectDate: (seletedDate: Date) => void
   selectedDate: number
   showOtherMonths: boolean
   givenDate: Date
   disablePreviousDates?: boolean
   minValue?: Date
   maxValue?: Date
   renderCustomDay?: (params: CustomDayProps) => React.ReactElement
}

const Week = (props: WeekProps) => {
   const {
      startWeekDayNum,
      prevMonthDays,
      showOtherMonths,
      ...otherProps
   } = props

   const renderWeek = () =>
      showOtherMonths ? (
         <WeekWithOtherDates
            {...otherProps}
            startWeekDayNum={startWeekDayNum}
            prevMonthStartDateToShow={prevMonthDays - startWeekDayNum + 1}
         />
      ) : (
         <WeekWithCurrentDates {...otherProps} />
      )

   return <div className={weekContainerClassName}>{renderWeek()}</div>
}

export default observer(Week)
