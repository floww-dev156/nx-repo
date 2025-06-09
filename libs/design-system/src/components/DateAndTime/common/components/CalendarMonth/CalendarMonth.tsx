/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react'
import cn from 'classnames'

import {
   CalendarDate,
   endOfMonth,
   getWeeksInMonth
} from '@internationalized/date'
import { useCalendarGrid } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { CalendarPropsBase } from '@react-types/calendar'
import { DOMProps, StyleProps } from '@react-types/shared'

import { useThemeContext } from '../../../../../Theme/Provider'
import { BasicSize } from '../../../../../types'

import { CalendarCell } from '../CalendarCell/CalendarCell'

import { calenderTableClassName } from '../../../DatePicker/styles'
import { datePickerSizes } from '../../../DatePicker/sizes'

interface CalendarMonthProps extends CalendarPropsBase, DOMProps, StyleProps {
   state: CalendarState | RangeCalendarState
   startDate: CalendarDate
   size: BasicSize
}

export function CalendarMonth(props: CalendarMonthProps) {
   let { state, startDate, size } = props

   let { gridProps, headerProps, weekDays } = useCalendarGrid(
      {
         ...props,
         endDate: endOfMonth(startDate)
      },
      state
   )

   let { locale } = useLocale()
   let weeksInMonth = getWeeksInMonth(startDate, locale)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].datePicker
   const datePickerSize = datePickerSizes[size]

   return (
      <table className={calenderTableClassName} {...gridProps}>
         <thead {...headerProps}>
            <tr>
               {weekDays.map((day, index) => (
                  <th
                     key={index}
                     className={cn(
                        datePickerSize.textMedium,
                        coloredTheme.normalCellTextColor
                     )}
                  >
                     <span>{day}</span>
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {[...new Array(weeksInMonth).fill(0)].map((_, weekIndex) => (
               <tr key={weekIndex}>
                  {state
                     .getDatesInWeek(weekIndex, startDate)
                     .map((date, i) =>
                        date ? (
                           <CalendarCell
                              key={i}
                              state={state}
                              date={date}
                              size={size}
                              currentMonth={startDate}
                           />
                        ) : (
                           <td key={i} />
                        )
                     )}
               </tr>
            ))}
         </tbody>
      </table>
   )
}
