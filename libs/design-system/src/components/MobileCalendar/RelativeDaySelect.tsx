import React from 'react'
import { startOfToday, startOfTomorrow, startOfYesterday } from 'date-fns'

import { OutlineSunIcon } from '../../icons/OutlineSunIcon'
import { OutlineStarIcon } from '../../icons/OutlineStarIcon'
import { OutlineCalendarMinusIcon } from '../../icons/OutlineCalendarMinusIcon'

import { DAYS_OF_WEEK } from './constants'
import {
   relativeDaySelectContainerClassName,
   relativeDaySelectItemContainerClassName,
   relativeDaySelectItemNameClassName,
   relativeDaySelectItemValueClassName
} from './styles'

interface RelativeDaySelectItemProps {
   dayText: string
   dayValue: string
   dayIcon: () => React.ReactElement
   onClickDay: () => void
}

interface RelativeDaySelectProps {
   setCalendarDate: (date: Date) => void
   onDateTimeChange: (date: Date) => void
}

const RelativeDaySelectItem = (
   props: RelativeDaySelectItemProps
): React.ReactElement => {
   const { dayText, dayValue, onClickDay, dayIcon: DayIcon } = props

   return (
      <div
         className={relativeDaySelectItemContainerClassName}
         onClick={onClickDay}
      >
         <span>
            <DayIcon />
         </span>
         <span className={relativeDaySelectItemNameClassName}>{dayText}</span>
         <span className={relativeDaySelectItemValueClassName}>{dayValue}</span>
      </div>
   )
}

const RelativeDaySelect = (
   props: RelativeDaySelectProps
): React.ReactElement => {
   const { setCalendarDate, onDateTimeChange } = props

   const today = startOfToday()
   const tomorrow = startOfTomorrow()
   const yesterday = startOfYesterday()

   const onSelectDay = (day: Date): void => {
      setCalendarDate(day)
      onDateTimeChange(day)
   }

   return (
      <div className={relativeDaySelectContainerClassName}>
         <RelativeDaySelectItem
            dayText='Today'
            dayValue={DAYS_OF_WEEK[today.getDay()]}
            onClickDay={() => {
               onSelectDay(today)
            }}
            dayIcon={() => <OutlineStarIcon />}
         />

         <RelativeDaySelectItem
            dayText='Tomorrow'
            dayValue={DAYS_OF_WEEK[tomorrow.getDay()]}
            onClickDay={() => {
               onSelectDay(tomorrow)
            }}
            dayIcon={() => <OutlineSunIcon />}
         />

         <RelativeDaySelectItem
            dayText='Yesterday'
            dayValue={DAYS_OF_WEEK[yesterday.getDay()]}
            onClickDay={() => {
               onSelectDay(yesterday)
            }}
            dayIcon={() => <OutlineCalendarMinusIcon />}
         />
      </div>
   )
}

export default RelativeDaySelect
