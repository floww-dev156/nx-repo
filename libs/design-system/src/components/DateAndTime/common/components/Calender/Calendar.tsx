import React, {
   ReactElement,
   useImperativeHandle,
   useMemo,
   useRef
} from 'react'

import { createCalendar } from '@internationalized/date'
import { useCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { useProviderProps } from '@react-spectrum/provider'
import { createDOMRef } from '@react-spectrum/utils'
import { useCalendarState } from '@react-stately/calendar'
import { DateValue, SpectrumCalendarProps } from '@react-types/calendar'
import { FocusableRef } from '@react-types/shared'

import { BasicSize } from '../../../../../types'

import { CalendarBase } from '../CalendarBase/CalendarBase'

interface CalendarProps extends SpectrumCalendarProps<DateValue> {
   size: BasicSize
}
function Calendar(props: CalendarProps, ref: FocusableRef<HTMLElement>) {
   props = useProviderProps(props)
   let { size, visibleMonths = 1 } = props
   let visibleDuration = useMemo(() => ({ months: visibleMonths }), [
      visibleMonths
   ])
   let { locale } = useLocale()
   let state = useCalendarState({
      ...props,
      locale,
      visibleDuration,
      createCalendar
   })

   let domRef = useRef(null)
   useImperativeHandle(ref, () => ({
      ...createDOMRef(domRef),
      focus() {
         state.setFocused(true)
      }
   }))

   let {
      calendarProps,
      prevButtonProps,
      nextButtonProps,
      errorMessageProps
   } = useCalendar(props, state)

   return (
      <CalendarBase
         {...props}
         state={state}
         calendarRef={domRef}
         size={size}
         calendarProps={calendarProps}
         prevButtonProps={prevButtonProps}
         nextButtonProps={nextButtonProps}
         errorMessageProps={errorMessageProps}
      />
   )
}

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 */
const _Calendar = React.forwardRef(Calendar) as (
   props: CalendarProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _Calendar as Calendar }
