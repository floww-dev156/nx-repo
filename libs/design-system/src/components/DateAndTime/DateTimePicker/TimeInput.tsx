import cn from 'classnames'
import React, { forwardRef, ReactElement } from 'react'
import { useFocusWithin } from 'react-aria'

import { FocusRingWithBorder } from '../../FocusRing/FocusRingWithBorder'

import { timeInputClassName } from './styles'

import './styles.css'

interface TimeInputProps {
   placeholder: string
   value: string | number
   onChange: (event: any) => void
   min?: number
   max?: number
}
const TimeInput = forwardRef(
   (
      props: TimeInputProps,
      ref: React.ForwardedRef<HTMLInputElement>
   ): ReactElement => {
      const { value, onChange, placeholder, min = 0, max = 12 } = props

      const { focusWithinProps } = useFocusWithin({})

      return (
         <FocusRingWithBorder within isError={false}>
            <input
               {...focusWithinProps}
               ref={ref}
               type='number'
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               max={max}
               min={min}
               className={cn(timeInputClassName, 'date-time-input')}
            />
         </FocusRingWithBorder>
      )
   }
)

export { TimeInput }
