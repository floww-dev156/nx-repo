import cn from 'classnames'
import React, { HTMLAttributes, RefObject, useRef } from 'react'
import { mergeProps, useButton, useHover } from 'react-aria'

import { useDateFormatter } from '@react-aria/i18n'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { CalendarState, RangeCalendarState } from '@react-stately/calendar'
import { AriaButtonProps } from '@react-types/button'
import { CalendarPropsBase } from '@react-types/calendar'
import { DOMProps, StyleProps } from '@react-types/shared'
import { CalendarDate } from '@internationalized/date'

import { Picker } from '../../../../../components/Picker'
import { Item } from '../../../../../components/Item/Item'
import { useThemeContext } from '../../../../../Theme/Provider'
import { ChevronLeftIcon } from '../../../../../icons/ChevronLeftIcon'
import { ChevronRightIcon } from '../../../../../icons/ChevronRightIcon'
import { BasicSize } from '../../../../../types'

import { CalendarMonth } from '../CalendarMonth/CalendarMonth'

import { datePickerSizes } from './sizes'
import * as Styles from './styles'
import useYearsArray from '../../useGetYearsArray'

interface CalendarBaseProps<T extends CalendarState | RangeCalendarState>
   extends CalendarPropsBase,
      DOMProps,
      StyleProps {
   state: T
   visibleMonths?: number
   calendarProps: HTMLAttributes<HTMLElement>
   nextButtonProps: AriaButtonProps
   prevButtonProps: AriaButtonProps
   errorMessageProps: HTMLAttributes<HTMLElement>
   calendarRef: RefObject<HTMLDivElement>
   size: BasicSize
}

export function CalendarBase<T extends CalendarState | RangeCalendarState>(
   props: CalendarBaseProps<T>
): React.ReactElement {
   let {
      state,
      calendarProps,
      nextButtonProps,
      prevButtonProps,
      calendarRef: ref,
      visibleMonths = 1,
      size
   } = props
   let currentMonth = state.visibleRange.start
   let monthDateFormatter = useDateFormatter({
      month: 'long',
      year: 'numeric',
      era:
         currentMonth.calendar.identifier === 'gregory' &&
         currentMonth.era === 'BC'
            ? 'short'
            : undefined,
      calendar: currentMonth.calendar.identifier,
      timeZone: state.timeZone
   })

   const prevButtonRef = useRef(null)
   const nextButtonRef = useRef(null)
   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].datePicker
   const datePickerSize = datePickerSizes[size]
   let { buttonProps: prevBtnProps } = useButton(prevButtonProps, prevButtonRef)
   let { hoverProps: prevHoverProps } = useHover({
      isDisabled: prevButtonProps.isDisabled
   })
   let { buttonProps: nextBtnProps } = useButton(nextButtonProps, nextButtonRef)
   let { hoverProps: nextHoverProps } = useHover({
      isDisabled: nextButtonProps.isDisabled
   })

   const yearsList = useYearsArray()

   const handleYearChange = (year: any): void => {
      const newYear = Number(year)
      const { month, day } = state.focusedDate
      const newDate = new CalendarDate(newYear, month, day)
      state.setFocusedDate(newDate)
   }

   const yearsListItems = yearsList.map((year, index) => ({
      key: year,
      name: year,
      id: year
   }))
   const renderYear = (): React.ReactElement => (
      <Picker
         size={'ExtraSmall'}
         selectedKey={state.focusedDate.year.toString()}
         onSelectionChange={handleYearChange}
         items={yearsListItems}
      >
         {item => (
            <Item key={item.key} textValue={item.name.toString()}>
               <p>{item.name}</p>
            </Item>
         )}
      </Picker>
   )

   let titles: React.ReactElement[] = []
   let calendars: React.ReactElement[] = []
   for (let i = 0; i < visibleMonths; i++) {
      let d = currentMonth.add({ months: i })
      const monthWithYear = monthDateFormatter.format(d.toDate(state.timeZone))
      const month = monthWithYear.split(' ')[0]
      titles.push(
         <div key={i} className={cn(Styles.calenderTitleContainerClassName)}>
            {i === 0 && (
               <button
                  {...mergeProps(prevBtnProps, prevHoverProps)}
                  className={cn(Styles.monthTriggerClassName, {
                     'cursor-not-allowed': prevBtnProps.disabled
                  })}
               >
                  <ChevronLeftIcon
                     fill={
                        prevBtnProps.disabled
                           ? coloredTheme.prevAndNextIconsDisabledColor
                           : coloredTheme.prevAndNextIconsColor
                     }
                  />
               </button>
            )}
            <div className={Styles.monthAndYearPickerContainerStyles}>
               <h2
                  aria-hidden
                  className={cn(
                     Styles.getMonthTitleStyles(coloredTheme, datePickerSize)
                  )}
               >
                  {month}
               </h2>
               {renderYear()}
            </div>
            {i === visibleMonths - 1 && (
               <button
                  {...mergeProps(nextBtnProps, nextHoverProps)}
                  className={cn(Styles.monthTriggerClassName, {
                     'cursor-not-allowed': nextBtnProps.disabled
                  })}
               >
                  <ChevronRightIcon
                     fill={
                        nextBtnProps.disabled
                           ? coloredTheme.prevAndNextIconsDisabledColor
                           : coloredTheme.prevAndNextIconsColor
                     }
                  />
               </button>
            )}
         </div>
      )

      calendars.push(
         <CalendarMonth
            {...props}
            key={i}
            state={state}
            startDate={d}
            size={size}
         />
      )
   }

   const handleCalendarContainerOnBlur = (
      event: React.FocusEvent<HTMLDivElement, Element>
   ): void => {
      // NOTE: handling default Calendar's onBlur behavior
      calendarProps.onBlur?.(event)

      // NOTE: The `stopPropagation()` is to fix the "Disabled Month Navigation" issue (Eg: TableViewQuickFilters)
      event.stopPropagation()
   }

   return (
      <div {...calendarProps} ref={ref} onBlur={handleCalendarContainerOnBlur}>
         <VisuallyHidden>
            <h2>{calendarProps['aria-label']}</h2>
         </VisuallyHidden>
         <div>{titles}</div>
         <div>{calendars}</div>
         <VisuallyHidden>
            <button
               aria-label={nextButtonProps['aria-label']}
               disabled={nextButtonProps.isDisabled}
               onClick={() => state.focusNextPage()}
               tabIndex={-1}
            />
         </VisuallyHidden>
      </div>
   )
}
