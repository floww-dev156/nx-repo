import cn from 'classnames'
import React, { useRef } from 'react'

import {
   CalendarDate,
   getDayOfWeek,
   isSameDay,
   isSameMonth,
   isToday
} from '@internationalized/date'
import { AriaCalendarCellProps, useCalendarCell } from '@react-aria/calendar'
import { useFocusRing } from '@react-aria/focus'
import { useLocale } from '@react-aria/i18n'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'

import { useThemeContext } from '../../../../../Theme/Provider'
import { BasicSize } from '../../../../../types'

import { datePickerSizes } from '../../../DatePicker/sizes'

import { getCalenderCellColorStyles, getCalenderCellStyles } from './styles'
import './styles.css'

interface CalendarCellProps extends AriaCalendarCellProps {
   state: CalendarState | RangeCalendarState
   currentMonth: CalendarDate
   size: BasicSize
}

export function CalendarCell({
   state,
   currentMonth,
   size,
   ...props
}: CalendarCellProps) {
   let ref = useRef(null)
   let {
      cellProps,
      buttonProps,
      isPressed,
      isSelected,
      isDisabled,
      isFocused,
      isInvalid,
      formattedDate
   } = useCalendarCell(
      {
         ...props,
         isDisabled: !isSameMonth(props.date, currentMonth)
      },
      state,
      ref
   )

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].datePicker
   const datePickerSize = datePickerSizes[size]

   let isUnavailable = state.isCellUnavailable(props.date) && !isDisabled
   let isLastSelectedBeforeDisabled =
      !isDisabled &&
      !isInvalid &&
      state.isCellUnavailable(props.date.add({ days: 1 }))
   let isFirstSelectedAfterDisabled =
      !isDisabled &&
      !isInvalid &&
      state.isCellUnavailable(props.date.subtract({ days: 1 }))
   let highlightedRange = 'highlightedRange' in state && state.highlightedRange
   let isSelectionStart =
      isSelected &&
      highlightedRange &&
      isSameDay(props.date, highlightedRange.start)
   let isSelectionEnd =
      isSelected &&
      highlightedRange &&
      isSameDay(props.date, highlightedRange.end)
   let { locale } = useLocale()
   let dayOfWeek = getDayOfWeek(props.date, locale)
   let isRangeStart =
      isSelected &&
      (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1)
   let isRangeEnd =
      isSelected &&
      (isLastSelectedBeforeDisabled ||
         dayOfWeek === 6 ||
         props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth))
   let { focusProps, isFocusVisible } = useFocusRing()
   let { hoverProps, isHovered } = useHover({
      isDisabled: isDisabled || isUnavailable || state.isReadOnly
   })

   const isTodayState = isToday(props.date, state.timeZone)

   const isFocusedState = isFocused && isFocusVisible

   return (
      <td
         ref={ref}
         {...cellProps}
         {...mergeProps(buttonProps, hoverProps, focusProps)}
         className={cn(
            getCalenderCellStyles(
               datePickerSize,
               isHovered,
               isSelected,
               isTodayState
            ),
            getCalenderCellColorStyles(
               coloredTheme,
               isHovered,
               isSelected,
               isTodayState,
               isDisabled,
               isFocusedState
            )
         )}
      >
         <span>
            <span>{formattedDate}</span>
            <div
               className={cn(
                  { ['calender-cell-dot']: isTodayState },
                  { [coloredTheme.dotUnselectedColor]: !isSelected },
                  { [coloredTheme.dotSelectedColor]: isSelected }
               )}
            />
         </span>
      </td>
   )
}
