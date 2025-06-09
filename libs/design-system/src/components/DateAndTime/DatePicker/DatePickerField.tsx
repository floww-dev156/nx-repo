import cn from 'classnames'
import React, { useRef } from 'react'

import { createCalendar } from '@internationalized/date'
import { useDateField } from '@react-aria/datepicker'
import { useLocale } from '@react-aria/i18n'
import { useDateFieldState } from '@react-stately/datepicker'
import { DateValue, SpectrumDatePickerProps } from '@react-types/datepicker'

import { BasicSize } from '../../../types'

import { DatePickerSegment } from '../common/components/DatePickerSegment/DatePickerSegment'

import { datePickerSegmentsClassName } from './styles'

interface DatePickerFieldProps extends SpectrumDatePickerProps<DateValue> {
   inputClassName?: string
   hideValidationIcon?: boolean
   maxGranularity?: SpectrumDatePickerProps<DateValue>['granularity']
   size: BasicSize
}

export function DatePickerField(props: DatePickerFieldProps) {
   let { isDisabled, isReadOnly, isRequired, inputClassName, size } = props
   let ref = useRef(null)
   let { locale } = useLocale()
   let state = useDateFieldState({
      ...props,
      locale,
      createCalendar
   })

   let { fieldProps } = useDateField(props, state, ref)

   return (
      <div
         {...fieldProps}
         data-testid={props['data-testid']}
         className={cn(datePickerSegmentsClassName, inputClassName)}
         ref={ref}
      >
         {state.segments.map((segment, i) => (
            <DatePickerSegment
               key={i}
               segment={segment}
               size={size}
               state={state}
               isDisabled={isDisabled}
               isReadOnly={isReadOnly}
               isRequired={isRequired}
            />
         ))}
      </div>
   )
}
